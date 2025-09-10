import { env } from "@/env";

export async function api<T>(path: string, init?: RequestInit) {
  const baseURL = env.NEXT_PUBLIC_API_BASE_URL;
  const prefixURl = "api".concat(path);

  const url = new URL(prefixURl, baseURL);

  const response = await fetch(url, init);
  const data: T = await response.json();

  return data;
}
