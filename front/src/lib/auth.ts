"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constant";
import { FormState, LoginFormSchema, SignupFormSchema } from "./type";
import { createSession, updateTokens } from "./session";
import { fetchExternalImage } from "next/dist/server/image-optimizer";
import { threadId } from "worker_threads";
import { post } from "@/hooks/fetch";


// export async function signUp(
//   prevState: any,
//   formData: FormData
// ) {
//   const form = Object.fromEntries(formData);
//   const validationFields = SignupFormSchema.safeParse({
//     name: formData.get("name"),
//     email: formData.get("email"),
//     password: formData.get("password"),
//   });
//   // console.log("validationFields,....111............",validationFields)
//   if (!validationFields.success) {
//     return {
//       error: validationFields.error.flatten().fieldErrors,
//     };
//   }
//   const { error } = await post("auth/signup", formData);
//   redirect("/auth/signin");
// }


export async function signUp(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validationFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }
console.log("validationFields........", validationFields.data);
  const response = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(validationFields.data),
  });
  const data = response.json();
    // console.log("data........", data);
  if (response.ok) {
    redirect("/admin");
  } else
    return {
      message:
        response.status === 409
          ? "The user is already existed!"
          : response.statusText,
    };
}

export async function signIn(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validationFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }
  const response = await fetch(`${BACKEND_URL}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(validationFields.data),
  });
  if (response.ok) {
    const result = await response.json();
    await createSession({
      user: {
        id: result.id,
        name: result.name,
      },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });
    console.log("result........", result);
    redirect("/");
  } else {
    return {
      message:
        response.status === 401 ? "invalid Credential" : response.statusText,
    };
  }
}

export const refreshToken = async (oldRefreshToken: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
      method: "POST",
      body: JSON.stringify({ refresh: oldRefreshToken }),
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }
    const { accessToken, refreshToken } = await response.json();

    // await updateTokens({ accessToken, refreshToken });
    const updateRes = await fetch("http://localhost:3000/api/auth/update", {
      method: "POST",
      body: JSON.stringify({
        accessToken,
        refreshToken,
      }),
    });

    if (!updateRes.ok) throw new Error("Failed to update the tokens");

    return accessToken;
  } catch (err) {
    console.error("Refresh Token failed:", err);

    return null;
  }
};
