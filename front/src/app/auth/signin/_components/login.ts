"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BACKEND_URL } from "@/helpers/api";
import { getErrorMessage } from "@/helpers/errors";
import { FormResponse } from "@/components/interfaces/form-error.interface";
import { createSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { post } from "@/hooks/fetch";
// import { AUTHENTICATION_COOKIE } from "../auth-cookie";

export default async function login
(_prevState: any, formData: FormData) {
    
   const { error } = await post("auth/login", formData);
     if (error) {
    return { error };
  }
  revalidatePath("/admin/dashboard");
  redirect("/admin/dashboard");
}
