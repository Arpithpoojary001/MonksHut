import {test ,expect}from '@playwright/test';

test('Assertions demo', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/');
    await page.pause();
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    await expect.soft(page .getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen1')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /css-dpmy2a/)
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/css-dpmy2a/)
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle('The Kitchen')
    await expect(page).toHaveScreenshot('kitchen.png')
})