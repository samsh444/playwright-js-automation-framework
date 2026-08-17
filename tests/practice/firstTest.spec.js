// import necessary playwright libraries
import {test, expect} from '@playwright/test';

/**
 * Basic smoke tests for the w3schools.com homepage, used as an early
 * practice/scaffolding file for this framework.
 *
 * Test flow:
 * 1. Before each test, navigate to the w3schools homepage.
 * 2. "has title" - assert the page title contains "w3schools" (case-insensitive).
 * 3. "Sign in" - assert the "Sign in" button is visible on the homepage.
 *
 * No notable locator strategies to call out; both tests use straightforward,
 * built-in Playwright assertions/locators.
 */

// Navigate to the site under test before every test in this file so each
// test starts from a known, consistent page state.
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
    // Only checks that the button renders on the homepage; does not click it
    // or verify any resulting sign-in flow/modal.
    await expect(page.getByRole('button', { name: 'Sign in'})).toBeVisible();
});

/**
 * Key concepts demonstrated in this file:
 * - test.beforeEach() for shared setup (navigation) across multiple tests.
 * - toHaveTitle() with a case-insensitive regex for a flexible title check.
 * - getByRole() as the preferred, resilient locator for interactive elements
 *   like buttons, over brittle CSS/XPath selectors.
 */
