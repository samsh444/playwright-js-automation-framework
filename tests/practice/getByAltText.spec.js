/**
 * Practice spec demonstrating Playwright's getByAltText() locator.
 *
 * Flow:
 * 1. Navigate to the Playwright docs intro page.
 * 2. Locate the Playwright logo image by its alt text and click it.
 *
 * Locator note: getByAltText() is used because the target element is an
 * <img> (the Playwright logo) rather than an interactive control with a
 * role/accessible name, so getByRole()/getByText() aren't applicable here —
 * alt text is the correct accessible attribute to key off of for images.
 */
//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

//set up test for going to website
test('Launch application', async({page}) => {
    await page.goto('https://playwright.dev/docs/intro');

    // Earlier attempt: the page renders more than one "Playwright logo" image
    // (e.g. duplicate nav markup for different viewport sizes), so a bare
    // getByAltText() match triggers a Playwright strict-mode violation.
    // .first() was tried as a quick fix but is unreliable since it doesn't
    // guarantee the element is actually visible/interactable.
    //getByAltText() to click on playwright icon/image to go back to playwright home page
    //await page.getByAltText('Playwright logo').first().click();

    // Final approach: .and(page.locator(':visible')) narrows the match down
    // to only the visible logo instance, resolving the same strict-mode
    // violation more robustly than .first().
    //scope to visable one
    // TODO(test-documenter): no expect() assertion follows this click — the
    // test never verifies that clicking the logo actually navigated back to
    // the Playwright home page (or any other expected outcome).
    await page.getByAltText('Playwright logo').and(page.locator(':visible')).click();
})

