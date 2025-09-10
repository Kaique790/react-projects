import { env } from "@/env";

export function api(path: string, init?: RequestInit) {
  const baseURL = env.NEXT_PUBLIC_API_BASE_URL;
  const prefixURl = "api".concat(path);

  const url = new URL(prefixURl, baseURL);

  fetch(url, init);
}
