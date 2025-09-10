const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('login with valid credentials', async ({ page }) => {
  await page.goto('/practice-test-login/');
  await page.locator('input[name="username"]').fill(process.env.USERNAME);
  await page.locator('input[name="password"]').fill(process.env.USER_PASSWORD);
  await page.getByRole('button', { name: /submit/i }).click();
  await expect(page).toHaveURL(/\/logged-in-successfully/); 
await expect(page.getByText('Logged In Successfully', { exact: true })).toBeVisible();
});

