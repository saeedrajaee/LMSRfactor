"use server";

import { PiezometerAcidSchema } from "@/components/lib/type/schema";
import { deleted, get, getUnique, patch, post } from "@/hooks/fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPiezometerAcid(
  prevState: any,
  formData: FormData
) {

  const form = Object.fromEntries(formData);

  
  const validationFields = PiezometerAcidSchema.safeParse({
    hipName: formData.get("hipName"),
    piezometerName: formData.get("piezometerName"),
    piezometerDate: formData.get("piezometerDate"),
    piezometerAcidLevel: formData.get("piezometerAcidLevel"),
    piezometerAcidLevelUnit: formData.get("piezometerAcidLevelUnit"),
  });

  console.log("validationFields,....111............",validationFields)

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  } 
  const { error } = await post("piezometerAcid", formData);
  redirect("/admin/piezometer-acid");
}

export default async function getPiezometerAcid() {
  const piezometerAcid = await get("piezometerAcid");
  return piezometerAcid;
}

export async function getUniquePiezometerAcid(id: string) {
  const piezometerAcid = await getUnique("piezometerAcid", id);
  return piezometerAcid;
}

export async function updatePiezometerAcid(formData: FormData, id: string) {
  const error = await patch("piezometerAcid", formData, id);
  revalidatePath("/admin/piezometer-acid", "page");
  redirect("/admin/piezometer-acid");
  if (error) {
    return { error };
  }
}

export async function deletePiezometerAcid(id: string) {
  const error = await deleted("piezometerAcid", id);
  revalidatePath("/admin/piezometer-acid", "page");
  redirect("/admin/piezometer-acid");
  if (error) {
    return { error };
  }
}
