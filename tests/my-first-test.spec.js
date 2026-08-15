// import necessary playwright libraries
import {test, expect} from '@playwright/test';

// use hook for going to w3schools URL
test.beforeEach(async ({page}) => {
    await page.goto('https://www.w3schools.com/');
});

// test to verify title of website
test('has title', async ({ page }) => {
    // assertion (expect) to validate page by seeing if it contains w3schools
    // add i for case sensitivity 
    await expect(page).toHaveTitle(/w3schools/i);
});

// test to verify Sign in button
test('Sign in', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Sign in'})).toBeVisible();
});
