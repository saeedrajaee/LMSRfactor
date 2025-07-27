"use server";

import { PlsSchema } from "@/components/lib/type/schema";
import { deleted, get, getUnique, patch, post } from "@/hooks/fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPls(prevState: any, formData: FormData) {
  const form = Object.fromEntries(formData);
  console.log("form,....111............", form);

  const validationFields = PlsSchema.safeParse({
    hipName: formData.get("hipName"),
    plsDate: formData.get("plsDate"),
    fe: formData.get("fe"),
    feUnit: formData.get("feUnit"),
    ph: formData.get("ph"),
    phUnit: formData.get("phUnit"),
    eh: formData.get("eh"),
    ehUnit: formData.get("ehUnit"),
    ec: formData.get("ec"),
    ecUnit: formData.get("ecUnit"),
    t: formData.get("t"),
    tUnit: formData.get("tUnit"),
    tss: formData.get("tss"),
    tssUnit: formData.get("tssUnit"),
    pb: formData.get("pb"),
    pbUnit: formData.get("pbUnit"),
  });

  console.log("validationFields,....111............", validationFields);

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }
  const { error } = await post("pls", formData);
  redirect("/admin/pls");
}

export default async function getPls() {
  const pls = await get("pls");
  return pls;
}

export async function getUniquePls(id: string) {
  const pls = await getUnique("pls", id);
  return pls;
}

export async function updatePls(formData: FormData, id: string) {
  const error = await patch("pls", formData, id);
  revalidatePath("/admin/pls", "page");
  redirect("/admin/pls");
  if (error) {
    return { error };
  }
}

export async function deletePls(id: string) {
  const error = await deleted("pls", id);
  revalidatePath("/admin/pls", "page");
  redirect("/admin/pls");
  if (error) {
    return { error };
  }
}
