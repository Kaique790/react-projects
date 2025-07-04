import { expect, test } from "@playwright/test";

test("update profile successfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizzas - SE" }).click();
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

  await page.getByLabel("Nome").fill("Pizza Shop 2");
  await page.getByLabel("Descrição").fill("New description");

  await page.getByRole("button", { name: "Salvar" }).click();

  const toast = page.getByText("Perfil atualizado com sucesso!");
  await expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Cancelar" }).click();

  await expect(
    page.getByRole("button", { name: "Pizza Shop 2" }),
  ).toBeVisible();
});

test("update profile error", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizzas - SE" }).click();
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();

  await page.getByLabel("Nome").fill("Pizza Error");
  await page.getByLabel("Descrição").fill("New description");

  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Erro ao atualizar perfil.");

  await expect(toast).toBeVisible();
});
