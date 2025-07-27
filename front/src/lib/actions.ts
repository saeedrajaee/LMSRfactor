"use server";

import { redirect } from "next/navigation";
import { authFetch } from "./authFetch";
import { BACKEND_URL } from "./constant";
import { getSession } from "./session";
import { post } from "@/hooks/fetch";

export const getProfile = async () => {
  // const session = await getSession();
  // const response = await fetch(`${API_URL}/auth/protected`, {
  //   headers: {
  //     authorization: `Bearer ${session?.accessToken}`,
  //   },
  // });
  const response = await authFetch(`${BACKEND_URL}/auth/protected`)
  const result = await response.json();
  return result;
};

