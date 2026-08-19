import { test, expect } from '@playwright/test';

/**
 * Verifies that a specific product can be added to the cart from a list of
 * multiple inventory items on the SauceDemo inventory page, and that it
 * correctly appears in the cart afterward.
 *
 * Test flow:
 * 1. Navigate to the SauceDemo site and log in with standard user credentials.
 * 2. On the inventory page, locate the "Sauce Labs Backpack" item specifically
 *    (among several items) and click its "Add to cart" button.
 * 3. Assert the cart badge count updates to reflect the added item.
 * 4. Navigate to the cart page.
 * 5. Assert the correct item name is displayed in the cart.
 *
 * Locator strategy note: the inventory item container is targeted via XPath
 * rather than a CSS class locator (e.g. `page.locator('.inventory_item')`);
 * both would work identically here, so the XPath appears to be a deliberate
 * choice for practicing XPath-based locators rather than a technical
 * necessity. `.filter({ has })` is then used to narrow the full set of
 * inventory item containers down to just the one containing the
 * "Sauce Labs Backpack" link, since multiple `.inventory_item` elements
 * exist on the page and a direct locator would match them all.
 */
test('Add specific item to cart from inventory list', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // --- Login ---
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  // TODO(test-documenter): no assertion confirms the login succeeded or that
  // the inventory page loaded before proceeding to interact with it.

  // --- Locate and act on specific inventory item ---
  // Base locator: matches every inventory item container on the page (XPath
  // used here in place of a CSS class selector; both would work, see file
  // header note).
  // .filter({ has }) narrows the container set down to the single item that
  // contains a "Sauce Labs Backpack" link, resolving the ambiguity of
  // multiple `.inventory_item` elements existing on the page.
  // .getByRole('button') then scopes the click to the "Add to cart" button
  // within that specific item's container only.
  await page
    .locator("xpath=//*[@class='inventory_item']")
    .filter({has: page.getByRole('link', { name: 'Sauce Labs Backpack'}) })
    .getByRole('button', { name: 'Add to cart'})
    .click(); // <-- action

  // --- Assertion ---
  // Verify the cart badge shows 1 item after adding
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Navigate to the cart to confirm the correct item was actually added,
  // not just that the badge count incremented.
  await page.locator('.shopping_cart_link').click();
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
});

/**
 * Key concepts demonstrated in this file:
 * - `.filter({ has: locator })` to disambiguate a locator that would
 *   otherwise match multiple elements (Playwright strict-mode friendly
 *   alternative to `.first()`/`.nth()`).
 * - Chaining scoped locators (`.filter().getByRole()`) to act on an element
 *   nested within a specific matched container rather than the whole page.
 * - Mixing an XPath locator with Playwright's built-in `getByRole` locators
 *   in the same chain.
 */

