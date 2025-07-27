"use server";

import { PiezometerTempSchema } from "@/components/lib/type/schema";
import { deleted, get, getUnique, patch, post } from "@/hooks/fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPiezometerTemp(
  prevState: any,
  formData: FormData
) {

  const form = Object.fromEntries(formData);

  
  const validationFields = PiezometerTempSchema.safeParse({
    hipName: formData.get("hipName"),
    piezometerName: formData.get("piezometerName"),
    piezometerTempDate: formData.get("piezometerTempDate"),
    piezometerTemp: formData.get("piezometerTemp"),
    tempUnit: formData.get("tempUnit"),
  });

  console.log("validationFields,....111............",validationFields)

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  } 
  const { error } = await post("piezometerTemp", formData);
  redirect("/admin/piezometer-temp");
}

export default async function getFlow() {
  const flow = await get("piezometerTemp");
  return flow;
}

export async function getUniquePiezometerTemp(id: string) {
  const flow = await getUnique("piezometerTemp", id);
  return flow;
}

export async function updatePiezometerTemp(formData: FormData, id: string) {
  const error = await patch("piezometerTemp", formData, id);
  revalidatePath("/admin/piezometer-temp", "page");
  redirect("/admin/piezometer-temp");
  if (error) {
    return { error };
  }
}

export async function deletePiezometerTemp(id: string) {
  const error = await deleted("piezometerTemp", id);
  revalidatePath("/admin/piezometer-temp", "page");
  redirect("/admin/piezometer-temp");
  if (error) {
    return { error };
  }
}
