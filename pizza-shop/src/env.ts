import { z } from "zod";

const envSchema = z.object({
  MODE: z.enum(["production", "development", "test"]),
  VITE_API_URL: z.string(),
  VITE_DELAY_API_CALLS: z.string().transform((value) => value === "true"),
});

export const env = envSchema.parse(import.meta.env);
