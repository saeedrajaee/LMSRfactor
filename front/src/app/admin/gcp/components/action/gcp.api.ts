"use server";

import { GcpSchema } from "@/components/lib/type/schema";
import { deleted, get, getUnique, patch, post } from "@/hooks/fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type ImportXlsProps = {
  hipName: string;
  gcpName: string;
  gcpX: string;
  gcpY: string;
  gcpZ: string;
  date: string;
  gcpHeight: string;
  dDay: string;
  dx: string;
  dxR: string;
  dxR1: string;
  dy: string;
  dyR: string;
  dyR1: string;
  dz: string;
  dzR: string;
  dzR1: string;
  ds: string;
  dsR: string;
  dsR1: string;
  dt: string;
  dtR: string;
  dtR1: string;
};

export async function createGcp(prevState: any, formData: FormData) {
  const form = Object.fromEntries(formData);
  // console.log("form,....111............", form);

  const validationFields = GcpSchema.safeParse({
    hipName: formData.get("hipName"),
    gcpName: formData.get("gcpName"),
    gcpX: formData.get("gcpX"),
    gcpY: formData.get("gcpY"),
    gcpZ: formData.get("gcpZ"),
    date: formData.get("date"),
    gcpHeight: formData.get("gcpHeight"),
    dDay: formData.get("dDay"),
    dx: formData.get("dx"),
    dxR: formData.get("dxR"),
    dxR1: formData.get("dxR1"),
    dy: formData.get("dy"),
    dyR: formData.get("dyR"),
    dyR1: formData.get("dyR1"),
    dz: formData.get("dz"),
    dzR: formData.get("dzR"),
    dzR1: formData.get("dzR1"),
    ds: formData.get("ds"),
    dsR: formData.get("dsR"),
    dsR1: formData.get("dsR1"),
    dt: formData.get("dt"),
    dtR: formData.get("dtR"),
    dtR1: formData.get("dtR1"),
  });

  // console.log("validationFields,....111............", validationFields);

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }
  const { error } = await post("gcp", formData);
  redirect("/admin/gcp");
}

export async function createBulkUsers(importXls: ImportXlsProps[]) {



  try {
    for (const importData of importXls) {
      // console.log("1.importData-----------",importData)
      const res = await fetch("http://localhost:3001/gcp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify((importData)), 
      });


      const data = await res.json();

    }
  } catch (error) {
    console.log(error);
  }
      revalidatePath("/admin/gcp", "page");
      redirect("/admin/gcp");
}

export default async function getGcp() {
  const gcp = await get("gcp");
  return gcp;
}

export async function getUniqueGcp(id: string) {
  const gcp = await getUnique("gcp", id);
  return gcp;
}

export async function updateGcp(formData: FormData, id: string) {
  const error = await patch("gcp", formData, id);
  revalidatePath("/admin/gcp", "page");
  redirect("/admin/gcp");
  if (error) {
    return { error };
  }
}

export async function deleteGcp(id: string) {
  const error = await deleted("gcp", id);
  revalidatePath("/admin/gcp", "page");
  redirect("/admin/gcp");
  if (error) {
    return { error };
  }
}
