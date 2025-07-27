import { cookies } from "next/headers";
import { getErrorMessage } from "../helpers/errors";
import { createSession } from "@/lib/session";
import { BACKEND_URL } from "@/lib/constant";

export const getHeaders = () => ({
  Cookie: cookies().toString(),
});

export const post = async (path: string, formData: FormData) => {
  console.log("path.................", path);
  const res = await fetch(`${BACKEND_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getHeaders() },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();

  console.log("parsedRes.................", parsedRes);
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return { error: "" };
};

export const get = async (path: string) => {
  const res = await fetch(`${BACKEND_URL}/${path}`, {
    headers: { ...getHeaders() },
  });
  return res.json();
};

export const getUnique = async (path: string, id: string) => {
  const res = await fetch(`${BACKEND_URL}/${path}/${id}`, {
    headers: { ...getHeaders() },
  });
  return res.json();
};

export const patch = async (path: string, formData: FormData, id: string) => {
  const res = await fetch(`${BACKEND_URL}/${path}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...getHeaders() },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  console.log("parsedRespatchpatchpatchpatch.................", parsedRes);

  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return { error: "" };
};

export const deleted = async (path: string, id: string) => {
  const res = await fetch(`${BACKEND_URL}/${path}/${id}`, {
    method: "DELETE",
    headers: { ...getHeaders() },
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return { error: "" };
};
