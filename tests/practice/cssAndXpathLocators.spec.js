//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

/**
 * Practice spec demonstrating raw CSS and XPath locator syntax in Playwright,
 * as an alternative to built-in locators like getByRole/getByLabel.
 *
 * Test flow:
 * 1. Navigate to the Salesforce login page.
 * 2. Locate the username field via an explicit XPath expression and fill it in.
 * 3. Locate the login button via an explicit CSS selector and click it.
 *
 * Locator strategy note: this file intentionally uses the `xpath=` and `css=`
 * prefixes to demonstrate both engines side by side, rather than for any
 * resilience/necessity reason. In a production test, Playwright's built-in
 * locators (e.g. getByLabel('Username'), getByRole('button', { name: 'Log In' }))
 * would be preferred since they don't require knowing internal id attributes
 * and are less brittle to markup changes.
 */
//set up test for going to website
test('Launch application', async({page}) => {
    await page.goto('https://login.salesforce.com/');

    // Relative XPath targeting the username input by its id attribute.
    // xpath= prefix is used here for demonstration; getByLabel('Username')
    // would be the more resilient built-in alternative.
    await page.locator("xpath=//input[@id='username']").fill('testuser');

    // CSS id selector for the login button.
    // css= prefix is used here for demonstration; getByRole('button', { name: ... })
    // would be the more resilient built-in alternative.
    // TODO(test-documenter): no expect() assertion follows this click, so the
    // test never verifies that login succeeded (e.g. navigation to a home page
    // or an error state) or that navigating to an unattended page is expected.
    await page.locator("css=#Login").click();
})

/**
 * Key concepts demonstrated in this file:
 * - Explicit `xpath=` and `css=` prefixes for forcing Playwright to use a
 *   specific locator engine, as opposed to built-in locators (getByRole,
 *   getByLabel, etc.) which are generally preferred for resilience.
 * - A minimal single-test spec with no beforeEach/POM usage, useful as a
 *   starting-point example before adopting more structured patterns.
 */