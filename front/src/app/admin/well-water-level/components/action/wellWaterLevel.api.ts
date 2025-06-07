"use server";

import { WellWaterLevelSchema } from "@/components/lib/type/schema";
import { deleted, get, getUnique, patch, post } from "@/hooks/fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createWellWaterLevel(prevState: any, formData: FormData) {
  const form = Object.fromEntries(formData);
  console.log("form,....111............", form);

  const validationFields = WellWaterLevelSchema.safeParse({
    hipName: formData.get("hipName"),
    wellLevelDate: formData.get("wellLevelDate"),
    wellName: formData.get("wellName"),
    wellLevelHeight: formData.get("wellLevelHeight"),
    wellLevelUnit: formData.get("wellLevelUnit"),
  });

  console.log("validationFields,....111............", validationFields);

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }
  const { error } = await post("wellWaterLevel", formData);
  redirect("/admin/well-water-level");
}

export default async function getWellWaterLevel() {
  const wellWaterLevel = await get("wellWaterLevel");
  return wellWaterLevel;
}

export async function getUniqueWellWaterLevel(id: string) {
  const wellWaterLevel = await getUnique("wellWaterLevel", id);
  return wellWaterLevel;
}

export async function updateWellWaterLevel(formData: FormData, id: string) {
  const error = await patch("wellWaterLevel", formData, id);
  revalidatePath("/admin/well-water-level", "page");
  redirect("/admin/well-water-level");
  if (error) {
    return { error };
  }
}

export async function deleteWellWaterLevel(id: string) {
  const error = await deleted("wellWaterLevel", id);
  revalidatePath("/admin/well-water-level", "page");
  redirect("/admin/well-water-level");
  if (error) {
    return { error };
  }
}
