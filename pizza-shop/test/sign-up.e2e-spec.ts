import { expect, test } from "@playwright/test";

test("sign-up successfully", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByLabel("Nome dos estabelecimento").fill("Pizza Shop");
  await page.getByLabel("Seu Nome").fill("admin");
  await page.getByLabel("Seu E-mail").fill("exemplo@gmail.com");
  await page.getByLabel("Seu celular").fill("88989779");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Cadastrado com sucesso!");

  await expect(toast).toBeVisible();
});

test("sign-up error", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Nome dos estabelecimento" })
    .fill("Pizza Error");

  await page.getByRole("textbox", { name: "Seu Nome" }).fill("admin");

  await page
    .getByRole("textbox", { name: "Seu E-mail" })
    .fill("exemplo@gmail.com");

  await page.getByRole("textbox", { name: "Seu celular" }).fill("88989779");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Erro ao cadastrar o estabelecimento.");

  await expect(toast).toBeVisible();
});

test("navigate to new login", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Já tenho uma conta" }).click();

  expect(page.url()).toContain("/sign-in");
});
