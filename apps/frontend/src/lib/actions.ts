"use server";

import z from "zod";
import { UploadformSchema } from "./zodSchema";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type FormState =
  | {
      errors?: {
        file?: string[];
      };
      message?: string;
    }
  | undefined;



export async function uploadFile(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validationFileds = UploadformSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validationFileds.success) {
    return {
      errors: validationFileds.error.flatten().fieldErrors,
    };
  }

  const res = await fetch("http://localhost:8000/upload", {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    return {
      message: "Success! File Uploaded",
    };
  } else
    return {
      message: "Ooops! Somethinge went wrong",
    };
}

export default async function getLibrarys() {
  const res = await fetch(`http://localhost:8000/upload`);
  return res.json();
}

export async function createLibrary(  state: FormState,
  formData: FormData): Promise<FormState> {
    const validationFileds = UploadformSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (!validationFileds.success) {
      return {
        errors: validationFileds.error.flatten().fieldErrors,
      };
    }
  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
  };
  const res = await fetch(`http://localhost:8000/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { message: "!!!!!!!!!!!!!!", };
  }
  const libraryFile = formData.get("file");
  if (libraryFile instanceof File && res.ok) {
    await uploadLibraryFile(parsedRes.id, libraryFile);
  }
  revalidatePath("/upload", "page");
  redirect("/upload");
}

async function uploadLibraryFile(Id: number, file: File) {

  console.log("file.............",file)

  const formData = new FormData();
  formData.append("file", file);
  await fetch(`http://localhost:8000/upload/${Id}/file`, {
    body: formData,
    method: "POST",
  });
}