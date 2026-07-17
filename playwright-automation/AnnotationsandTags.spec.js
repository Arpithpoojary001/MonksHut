import {test, expect} from '@playwright/test';

test.skip('Test One', async ({ page }) => {

})

test('not yet ready', async ({ page }) => {
    test.fail();
})

test.fixme('needs to be fixed', async ({ page }) => {

})

test('slow test', async ({ page }) => {
    test.slow()
})

test('test with tags@smoke', async ({ page }) => {

})