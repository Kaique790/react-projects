import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mock";

export const moker = setupWorker(signInMock);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }
  await moker.start();
}
