// tests/redirection.spec.ts
import { test, expect } from "@playwright/test";

test("The login button redirects to the login page", async ({ page }) => {
  // 1. Navigate to the home page.
  // Playwright will use the `baseURL` configured in playwright.config.ts
  await page.goto("/");

  // 2. Locate and click the button that causes the redirection.
  await page.getByRole("button", { name: "Login" }).click();

  // 3. Verify the redirection.
  // The page should now be at the login URL.
  await expect(page).toHaveURL(/login/);

  // 4. (Optional) Verify the content of the new page.
  // For example, look for the 'Sign In' heading.
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
});
