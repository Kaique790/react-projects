import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.url(),
  APP_URL: z.url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  const errors = z.treeifyError(parsedEnv.error);
  console.error("Invalid enviroment variables: ", errors);

  throw new Error("Invalid enviroment variables.");
}

export const env = parsedEnv.data;
