import {test, expect} from '@playwright/test';

/**
 * Demonstrates Playwright's getByTitle() locator by exercising the
 * light/dark/system theme toggle button on the Playwright docs homepage.
 *
 * Test flow:
 * 1. Navigate to the Playwright docs homepage.
 * 2. Click the theme toggle button, located via its `title="system mode"`
 *    attribute.
 * 3. Assert that clicking the toggle advanced the theme, exposing a new
 *    button whose `title` attribute is now "light mode".
 *
 * Locator strategy: the theme toggle button has no accessible role/name or
 * visible text that uniquely identifies it, but it does expose a `title`
 * attribute that changes with each theme state (system/light/dark). getByTitle()
 * is the most direct, resilient way to target it here — role- or text-based
 * locators aren't viable since the button's label isn't rendered as text.
 */
test('Launch application', async({page}) => {
    // Navigate to the site under test before interacting with any elements.
    await page.goto('https://playwright.dev/');

    // The toggle button's title reflects the *current* theme state ("system
    // mode" on first load). getByTitle() matches on the `title` attribute,
    // which is the only unique, stable identifier available on this button.
    await page.getByTitle('system mode').click();

    // Clicking the toggle advances the theme (system -> light in this case),
    // which changes the button's title attribute. Asserting on the new
    // title confirms the click actually changed state, not just that the
    // button was clickable.
    await expect(page.getByTitle('light mode')).toBeVisible();
})

/**
 * Key concepts demonstrated:
 * - getByTitle(): targets elements via their `title` HTML attribute, useful
 *   when no accessible role/name or visible text is available for a more
 *   semantic locator like getByRole() or getByText().
 * - Locators that double as assertions: getByTitle('light mode') is used
 *   inside expect(...).toBeVisible() to verify a state change (the button's
 *   title changed after the click) rather than just locating an element.
 */

