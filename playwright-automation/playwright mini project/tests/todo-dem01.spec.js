import { test, expect } from '@playwright/test';

test('to-do app @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('go for grocessory');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('purchase goods');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('walk along');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('play');
  await page.getByTestId('text-input').press('Enter');
  await page.getByText('go for grocessory').click();
  await page.getByText('go for grocessory').click();
  await page.getByRole('listitem').filter({ hasText: 'go for grocessory' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'walk along' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('play')).toBeVisible();
  await expect(page.getByTestId('todo-list')).toContainText('play');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.getByTestId('todo-list')).toHaveCount(2);
});