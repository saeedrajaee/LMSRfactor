import { authFetch } from "@/lib/authFetch";
import { BACKEND_URL } from "@/lib/constant";
import { deleteSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  
    console.log("...........deleteSession.............","OOOOOOOOOOOOOOOOKkKK")


  const response = await authFetch(`${BACKEND_URL}/auth/signout`,{
    method:"POST",
  })
  console.log("...........deleteSession.............",response)
  if (response.ok){

    await deleteSession();
  }
  
  revalidatePath("/", "layout");
  revalidatePath("/", "page");

  return NextResponse.redirect(new URL("/", req.nextUrl));
}
