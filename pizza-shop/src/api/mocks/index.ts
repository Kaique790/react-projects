import { env } from "@/env";
import { setupWorker } from "msw/browser";

export const moker = setupWorker();

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }
  await moker.start();
}
