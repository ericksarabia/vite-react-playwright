// tests/button.spec.ts
import { test, expect } from "@playwright/test";

test("The button changes text when clicked", async ({ page }) => {
  // Navigate to the application's main page.
  // Playwright will use the 'baseURL' we defined in the configuration.
  await page.goto("/");

  // Find the button by its initial text.
  const button = page.getByRole("button", { name: "Click me!" });

  // Ensure the button is visible.
  await expect(button).toBeVisible();

  // Click the button.
  await button.click();

  // Now, find the button with the new text.
  const clickedButton = page.getByRole("button", { name: "Clicked!" });

  // Wait for the new text to be visible.
  await expect(clickedButton).toBeVisible();
});
