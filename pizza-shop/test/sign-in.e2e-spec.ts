import { expect, test } from "@playwright/test";

test("sign-in successfully", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel("Seu e-mail").fill("kiaqbs@gmail.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Enviamos um e-mail de autenticação");

  await expect(toast).toBeVisible();
});

test("sign-in with wrong credentials", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByLabel("Seu e-mail").fill("emailerror@gmail.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Credenciais inválidas");

  await expect(toast).toBeVisible();
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Novo Estabelecimento" }).click();

  expect(page.url()).toContain("/sign-up");
});
