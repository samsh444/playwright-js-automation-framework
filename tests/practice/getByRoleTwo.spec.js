//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

/**
 * Practice spec demonstrating Playwright's getByRole locator on the
 * Salesforce login page.
 *
 * Flow:
 * 1. Navigate to the Salesforce login page.
 * 2. Locate the Username field by its accessible role/name and click it.
 * 3. Locate the Password field by its accessible role/name and fill in a value.
 *
 * Locator strategy: getByRole targets elements by their ARIA role (e.g.
 * "textbox") plus accessible name (e.g. "Username"), rather than relying on
 * CSS/XPath selectors tied to id/class attributes. Since the Salesforce
 * login form exposes accessible labels for its inputs, getByRole is more
 * resilient to markup/id changes than a CSS or XPath selector would be, and
 * it mirrors how a screen reader or real user would identify the field.
 */
//set up test for going to website
test('Launch application', async({page}) => {
    // Navigate to the target application under test.
    await page.goto('https://login.salesforce.com/');

    // getByRole('textbox', { name: 'Username' }) matches the input via its
    // accessible role + label text, avoiding a brittle id/class selector.
    // TODO(test-documenter): the Username field is clicked but never filled
    // with a value, so this step has no visible effect on the form state.
    await page.getByRole('textbox', {name: 'Username'}).click();

    // fill() sets the field's value directly (analogous to Selenium's
    // sendKeys), bypassing individual keystroke events.
    await page.getByRole('textbox', {name: 'Password'}).fill('pass123');

    // TODO(test-documenter): no expect() assertion is made anywhere in this
    // test, so it only exercises the actions above without verifying any
    // outcome (e.g. that the fields contain the expected values or that
    // login succeeds/fails as expected).
})

/**
 * Key concepts demonstrated:
 * - getByRole locator: finds elements by ARIA role + accessible name,
 *   which is generally preferred over CSS/XPath for resilience to markup
 *   changes and for accessibility-aligned test design.
 * - fill() vs click(): fill() sets an input's value in one step; click()
 *   only focuses/activates the element and does not enter text.
 */

