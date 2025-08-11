/* eslint-disable @typescript-eslint/no-explicit-any */
import { test, expect } from "@playwright/test";

test("Clicking the login button pushes a GTM event to the dataLayer", async ({
  page,
}) => {
  // 1. Navigate to the Home page.
  await page.goto("/");

  // 2. Click the 'Login' button. This action causes the GTM event to be pushed.
  await page.getByRole("button", { name: "Login" }).click();

  // 3. Evaluate the `dataLayer` in the browser context to inspect its content.
  const dataLayer = await page.evaluate(() => {
    // It's important to make sure `window.dataLayer` exists.
    return (window as any).dataLayer;
  });

  // 4. Assertions:
  // a) Verify the URL redirection.
  await expect(page).toHaveURL(/login/);

  // b) Verify the GTM event in the dataLayer.
  // The last event pushed to the dataLayer should be our custom event.
  const lastEvent = dataLayer[dataLayer.length - 1];
  expect(lastEvent).toEqual({
    event: "cta_click",
    event_category: "navigation",
    event_label: "login_button_home",
  });
});
