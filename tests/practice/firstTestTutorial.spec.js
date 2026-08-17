/**
 * Beginner/tutorial-style smoke test for the ParaBank demo site.
 * Verifies that the application is reachable and loads the expected page.
 *
 * Test flow:
 * 1. Navigate to the ParaBank homepage.
 * 2. Assert the page title contains "parabank" (case-insensitive) to confirm
 *    the correct site loaded successfully.
 */
//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

//set up test for going to website
test('Launch application', async({page}) => {
    // Navigate directly to the app's homepage; this is the setup/entry point for the test.
    await page.goto('https://parabank.parasoft.com/parabank/index.html');

    // Title check via regex (case-insensitive) is a lightweight way to confirm
    // the correct app loaded without depending on exact title casing/wording.
    await expect(page).toHaveTitle(/parabank/i);
})

/**
 * Key concepts:
 * - `page.goto()` for basic navigation setup.
 * - `expect(page).toHaveTitle()` with a regex for a resilient, low-maintenance
 *   smoke-test assertion (avoids exact-string matching).
 */
