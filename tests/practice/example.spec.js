// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Smoke tests against the public Playwright docs site (playwright.dev).
 * These are the boilerplate tests scaffolded by `npm init playwright@latest`
 * and are kept here as a "practice"/sanity-check example rather than
 * coverage for this project's own application.
 *
 * Test flow:
 * 1. "has title" - navigate to the homepage and assert the page title
 *    contains "Playwright".
 * 2. "get started link" - navigate to the homepage, click the "Get started"
 *    link, and assert the resulting page shows an "Installation" heading.
 *
 * Locator strategy: uses `getByRole` throughout (link/heading by accessible
 * name), which is resilient to markup/CSS changes and mirrors how a user
 * or screen reader identifies these elements.
 */

test('has title', async ({ page }) => {
  // Navigate to the site under test.
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  // Navigate to the site under test.
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  // Navigating via a real link click (rather than page.goto to the docs URL)
  // exercises the actual in-app navigation flow.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

/**
 * Key concepts demonstrated in this file:
 * - Standalone `test()` blocks (no `test.describe` grouping needed for two
 *   independent smoke checks).
 * - `getByRole` locators targeting accessible name, preferred over CSS/XPath
 *   selectors for resilience to markup changes.
 * - Simple `expect(page).toHaveTitle()` and `expect(locator).toBeVisible()`
 *   assertions as the standard pattern for page-level vs. element-level checks.
 */
