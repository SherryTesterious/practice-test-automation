import { test, expect } from '@playwright/test';
import 'dotenv/config';

test('login with valid credentials', async ({ page }) => {
  await page.goto('/practice-test-login/');
  await page.locator('input[name="username"]').fill(process.env.USERNAME);
  await page.locator('input[name="password"]').fill(process.env.USER_PASSWORD);
  await page.getByRole('button', { name: /submit/i }).click();
  await expect(page).toHaveURL(/\/logged-in-successfully/); 
await expect(page.getByText('Logged In Successfully', { exact: true })).toBeVisible();
});

test('login with invalid credentials', async ({ page }) => {
  await page.goto('/practice-test-login/');
  await page.locator('input[name="username"]').fill("wrongName");
  await page.locator('input[name="password"]').fill("123456");
  await page.getByRole('button', { name: /submit/i }).click();
  await expect(page).toHaveURL(/\/practice-test-login/); 
  await expect(page.locator('#error')).toHaveText(/Your username is invalid/i);
});

