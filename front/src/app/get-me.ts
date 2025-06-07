"use server";

import { get } from "@/hooks/fetch";

export default async function getMe() {
  return get("users/me");
}
