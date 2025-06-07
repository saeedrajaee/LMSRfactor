"use server";

import { FlowSchema } from "@/components/lib/type/schema";
import { deleted, get, getUnique, patch, post } from "@/hooks/fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createFlow(
  prevState: any,
  formData: FormData
) {

  const form = Object.fromEntries(formData);

  
  const validationFields = FlowSchema.safeParse({
    hipName: formData.get("hipName"),
    flowDataIntDate: formData.get("flowDataIntDate"),
    flowRate: formData.get("flowRate"),
    flowUnit: formData.get("flowUnit"),
    pad: formData.get("pad"),
  });

  console.log("validationFields,....111............",validationFields)

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  } 
  const { error } = await post("flow", formData);
  redirect("/admin/flow");
}

export default async function getFlow() {
  const flow = await get("flow");
  return flow;
}

export async function getUniqueFlow(id: string) {
  const flow = await getUnique("flow", id);
  return flow;
}

export async function updateFlow(formData: FormData, id: string) {
  const error = await patch("flow", formData, id);
  revalidatePath("/admin/flow", "page");
  redirect("/admin/flow");
  if (error) {
    return { error };
  }
}

export async function deleteFlow(id: string) {
  const error = await deleted("flow", id);
  revalidatePath("/admin/flow", "page");
  redirect("/admin/flow");
  if (error) {
    return { error };
  }
}
