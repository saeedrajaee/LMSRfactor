"use server";

import { accumulationTermSchema } from "@/components/lib/type/schema";
import { deleted, get, getUnique, patch, post } from "@/hooks/fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createAccumulationTerm(
  prevState: any,
  formData: FormData
) {
  const form = Object.fromEntries(formData);
  const validationFields = accumulationTermSchema.safeParse({
    hipName: formData.get("hipName"),
    flowIn: formData.get("flowIn"),
    flowUnitIn: formData.get("flowUnitIn"),
    flowOut: formData.get("flowOut"),
    flowUnitOut: formData.get("flowUnitOut"),
    accumulationDate: formData.get("accumulationDate"),
    accumulationTerm: formData.get("accumulationDate"),
  });
  // console.log("validationFields,....111............",validationFields)
  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }
  const { error } = await post("accumulationTerm", formData);
  redirect("/admin/accumulation-term");
}

export default async function getAccumulationTerm() {
  const accumulationTerm = await get("accumulationTerm");
  return accumulationTerm;
}

export async function getUniqueAccumulationTerm(id: string) {
  const accumulationTerm = await getUnique("accumulationTerm", id);
  return accumulationTerm;
}

export async function updateAccumulationTerm(formData: FormData, id: string) {
  const error = await patch("accumulationTerm", formData, id);
  revalidatePath("/admin/accumulation-term", "page");
  redirect("/admin/accumulation-term");
  if (error) {
    return { error };
  }
}

export async function deleteAccumulationTerm(id: string) {
  const error = await deleted("accumulationTerm", id);
  revalidatePath("/admin/accumulation-term", "page");
  redirect("/admin/accumulation-term");
  if (error) {
    return { error };
  }
}
