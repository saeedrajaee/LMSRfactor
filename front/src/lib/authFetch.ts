import { refreshToken } from "./auth";
import { getSession } from "./session";

export interface FetechOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const authFetch = async (
  url: string | URL,
  options: FetechOptions = {}
) => {
  const session = await getSession();

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${session?.accessToken}`,
  };
  let response = await fetch(url, options);

  if (response.status === 401) {
    if (!session?.refreshToken) throw new Error("Refresh token not found!");
    const newAccessToken = await refreshToken(session.refreshToken);
    if (newAccessToken) {
      options.headers.Authorrization = `Bearer ${newAccessToken}`;
      response = await fetch(url, options);
    }
  }
  return response;
};
