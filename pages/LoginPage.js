/**
 * LoginPage
 * ---------
 * Page Object representing the login screen at the-internet.herokuapp.com/login.
 *
 * This class encapsulates all locators and interactions related to the login page,
 * so tests can call simple, readable methods (e.g. loginPage.login(...))
 * instead of repeating raw Playwright locator calls in every test file.
 */
export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page - The Playwright page object for the current browser tab/context.
   */
  constructor(page) {
    this.page = page;

    // TODO: Confirm these locators against the actual DOM/accessibility tree.
    // This site does not reliably use <label> elements, so getByRole with an
    // accessible name may not work here — fall back to page.locator('#id')
    // if that's the case.
    this.usernameField = page.getByRole('textbox', { name: 'Username' });
    this.passwordField = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.logoutButton = page.locator("xpath=//i[@class='icon-2x icon-signout']");
  }

  /**
   * Navigates directly to the login page.
   */
  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  /**
   * Performs a login attempt using the provided credentials.
   * Does not assert success/failure — that responsibility belongs to the test,
   * so this method stays reusable for both valid and invalid login scenarios.
   *
   * @param {string} username
   * @param {string} password
   */
  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  /**
   * Performs logout attempt by clicking the logout button
   */
  async logout() {
    await this.logoutButton.click();
  }
}