//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

/**
 * Practice spec demonstrating the getByRole locator against the ParaBank demo site.
 *
 * Flow:
 * 1. Navigate to the ParaBank homepage.
 * 2. Locate and click the "Forgot login info?" link using getByRole.
 *
 * Locator strategy: getByRole targets the link by its accessible role and
 * visible accessible name, mirroring how a screen reader or keyboard user
 * would identify it. This is preferred over CSS/XPath selectors here since
 * it doesn't depend on ParaBank's internal markup (ids/classes), making the
 * test more resilient to front-end structure changes.
 */
//set up test for going to website
test('Launch application', async({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.html');

    // getByRole('link', { name: ... }) finds the anchor by its ARIA role and
    // accessible name rather than a CSS selector, so the test keeps working
    // even if the link's class/id/DOM position changes.
    // TODO(test-documenter): no expect() assertion follows the click, so the
    // navigation/outcome (e.g. landing on the "Forgot Login Info" page) is
    // never verified — this test only exercises the locator, not the result.
    await page.getByRole('link', {name: 'Forgot login info?'}).click();
})
