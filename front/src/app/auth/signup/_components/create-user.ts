"use server";

import { post } from "@/hooks/fetch";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: any, formData: FormData) {
  const { error } = await post("auth/signup", formData);
  if (error) {
    return { error };
  }
  redirect("/auth/signin");
}
