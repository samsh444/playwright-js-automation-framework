import { test, expect } from '@playwright/test';

/**
 * Test: Add a specific product to cart on Sauce Labs demo site
 *
 * Flow:
 * 1. Log in with standard user credentials
 * 2. Locate the specific inventory item by filtering on its visible text
 * 3. Click that item's "Add to cart" button
 *
 * Locator strategy notes:
 * - Login fields use getByRole('textbox', { name }) — accessible, robust
 *   against markup changes since it targets the accessible name, not
 *   implementation details like id/class.
 * - Product list uses an XPath locator scoped to class="inventory_item"
 *   as the base set, then narrows to the exact product using .filter({ hasText }).
 *   This pattern (broad locator → .filter()) is more resilient than trying
 *   to write one single locator matching a specific unique product, since
 *   the base locator doesn't need to know anything product-specific.
 */
test('Add specific item to cart from inventory list', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // --- Login ---
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // --- Locate and act on specific inventory item ---
  // Base locator: all inventory item containers
  // .filter({ hasText }) narrows to the one containing this product's name
  // .getByRole('button') finds the "Add to cart" button within that scope
  await page
    .locator("xpath=//*[@class='inventory_item']")
    .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
    .getByRole('button')
    .click(); // <-- action 

  // --- Assertion (recommended addition) ---
  // Verify the cart badge shows 1 item after adding
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});