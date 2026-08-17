/**
 * Practice spec demonstrating the getByLabel locator strategy.
 *
 * 1. Navigate to the Salesforce login page.
 * 2. Locate and click the "Remember me" checkbox using getByLabel.
 *
 * Locator strategy: getByLabel targets the form control associated with a
 * <label> element (via `for`/`id` or wrapping the input), which is how the
 * "Remember me" checkbox is exposed to users and assistive tech. This is
 * preferred here over a CSS/id selector because it doesn't depend on
 * implementation details like internal element IDs or class names, so the
 * test stays resilient if Salesforce changes its markup but keeps the same
 * visible label text.
 */
//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

//set up test for going to website
test('Launch application', async({page}) => {
    // Navigate to the Salesforce login page under test.
    await page.goto('https://login.salesforce.com/');

    // getByLabel finds the checkbox by its associated "Remember me" label
    // rather than a brittle CSS/id selector.
    // TODO(test-documenter): No expect() assertion in this test, and the
    // click's outcome (e.g. checkbox becomes checked) is never verified.
    await page.getByLabel('Remember me').click();
})

/**
 * Key concepts:
 * - getByLabel: resolves form controls via their associated <label> text,
 *   mirroring how a user identifies the field, rather than relying on
 *   internal selectors like id/class.
 */