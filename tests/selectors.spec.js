import { test, expect } from '@playwright/test';

test('Selectors demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('standard_user');
    await page.locator('[id="user-name"]').fill('ramanujan');
    await page.locator('#login-button').click();
     await page.pause();
    await page.locator('xpath=//input[@id="user-name"]').fill('ramanujan');
    await page.locator('//input[@id="user-name"]').fill('faraday');
    await page.locator('text=LOGIN');
    await page.locator('input:has-text("LOGIN")').click();
});