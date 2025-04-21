"use server";

import { CopperConcentrationSchema } from "@/components/lib/type/schema";
import { deleted, get, getUnique, patch, post } from "@/hooks/fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCopperConcentration(
  prevState: any,
  formData: FormData
) {

  const form = Object.fromEntries(formData);

  
  const validationFields = CopperConcentrationSchema.safeParse({
    hipName: formData.get("hipName"),
    copConDate: formData.get("copConDate"),
    copCon: formData.get("copCon"),
    copConUnit: formData.get("copConUnit"),
  });

  console.log("validationFields,....111............",validationFields)

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  } 
  const { error } = await post("CopperConcentration", formData);
  redirect("/admin/copper-concentration");
}

export default async function getCopperConcentration() {
  const copperConcentration = await get("copperConcentration");
  return copperConcentration;
}

export async function getUniqueCopperConcentration(id: string) {
  const copperConcentration = await getUnique("copperConcentration", id);
  return copperConcentration;
}

export async function updateCopperConcentration(formData: FormData, id: string) {
  const error = await patch("copperConcentration", formData, id);
  revalidatePath("/admin/copper-concentration", "page");
  redirect("/admin/copper-concentration");
  if (error) {
    return { error };
  }
}

export async function deleteCopperConcentration(id: string) {
  const error = await deleted("copperConcentration", id);
  revalidatePath("/admin/copper-concentration", "page");
  redirect("/admin/copper-concentration");
  if (error) {
    return { error };
  }
}
