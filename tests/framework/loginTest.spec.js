// Import Playwright's test runner and assertion library
import { test, expect } from '@playwright/test';

// Import the LoginPage class — this gives us access to reusable
// login locators and actions without duplicating them in this file.
import { LoginPage } from '../../pages/LoginPage.js';

test.describe('Login functionality', () => {
  // Runs before each test below — creates a fresh LoginPage instance
  // and navigates to the login page, so every test starts from the same known state.
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('successful login with valid credentials', async ({ page }) => {
    // Known valid credentials published for this practice site
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // Confirm the correct locator/assertion for the post-login success message.
    // This site typically shows a message like "You logged into a secure area!"
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  });

  test('login fails with invalid credentials', async ({ page }) => {
    await loginPage.login('wronguser', 'wrongpassword');

    // Verification step > assertion for the login failure message.
    await expect(page.getByText('Your username is invalid!')).toBeVisible();
  });

  // Click on the logout button and verify logging out is working as expected
  test('verify logout button', async ({page}) => {
    await loginPage.logout();
  });

});