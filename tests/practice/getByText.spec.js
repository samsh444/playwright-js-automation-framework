//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

/**
 * Practice test demonstrating the getByText locator strategy.
 * The Salesforce login page's "Forgot Your Password" link has no accessible
 * role/name pairing that getByRole can target as reliably as its visible text,
 * so getByText is used to locate and click it by its rendered label.
 *
 * Flow:
 * 1. Navigate to the Salesforce login page.
 * 2. Locate and click the "Forgot Your Password" link via its visible text.
 *
 * Locator note: getByText matches on rendered/visible text content, which
 * mirrors how a user would find this link on the page and is more resilient
 * to CSS/class changes than a CSS selector.
 */
//set up test for going to website
test('Launch application', async({page}) => {
    await page.goto('https://login.salesforce.com/');

    // TODO(test-documenter): click action is performed but no expect() verifies
    // the resulting navigation/state (e.g. landing on the password reset page).
    // This test has no assertions at all.
    //getByText for locator
    await page.getByText('Forgot Your Password').click();
})