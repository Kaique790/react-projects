import { test, expect } from "@playwright/test";

test("list orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("cell", { name: "customer1", exact: true }),
  ).toBeVisible();

  await expect(
    page.getByRole("cell", { name: "customer10", exact: true }),
  ).toBeVisible();
});

test("paginate to next and previous page", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  const nextPageButton = page.getByRole("button", { name: "Próxima página" });

  await nextPageButton.click();
  await nextPageButton.click();

  expect(page.getByText("Página 3 de")).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer21", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer30", exact: true }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Página anterior" }).click();

  expect(page.getByText("Página 2 de")).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer11", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer20", exact: true }),
  ).toBeVisible();
});

test("paginate orders to last page and first page", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Ultima página" }).click();

  expect(page.getByText("Página 6 de")).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer51", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer60", exact: true }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Primeira página" }).click();

  expect(page.getByText("Página 1 de")).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer1", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "customer10", exact: true }),
  ).toBeVisible();
});

test("filter by order id", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("textbox", { name: "ID do pedido" }).fill("order-8");
  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(page.getByRole("cell", { name: "order-8" })).toBeVisible();
});

test("filter by customer name", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Nome do Cliente" })
    .fill("customer10");
  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(page.getByRole("cell", { name: "customer10" })).toBeVisible();
});

test("filter by status", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();
  await page.getByLabel("Pendente").click();

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  const tableRows = page.getByRole("cell", { name: "Pendente" });
  await expect(tableRows).toHaveCount(10);
});
