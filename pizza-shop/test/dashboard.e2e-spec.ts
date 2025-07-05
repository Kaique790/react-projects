import { expect, test } from "@playwright/test";

test("change to dark theme", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Toggle theme" }).click();
  await page.getByRole("menuitem", { name: "Dark" }).click();

  const hasDarkClass = await page.evaluate(() => {
    return document.documentElement.classList.contains("dark");
  });

  expect(hasDarkClass).toBe(true);
});

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("20", { exact: true }).nth(1)).toBeVisible();
  expect(page.getByText("-5%")).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("20", { exact: true }).first()).toBeVisible();
  expect(page.getByText("+3%").first()).toBeVisible();
});

test("display month canceled orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("330")).toBeVisible();
  expect(page.getByText("+3%").nth(1)).toBeVisible();
});

test("display month revenue metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByText("R$213")).toBeVisible();
  expect(page.getByText("+10%")).toBeVisible();
});
