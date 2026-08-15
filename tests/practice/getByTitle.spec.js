//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

//set up test for going to website
test('Launch application', async({page}) => {
    await page.goto('https://playwright.dev/');

    //getByTitle() > can use if the title attribute is present
    //find title attribute for button that switches light/dark themes
    await page.getByTitle('system mode').click();

    //system mode was set to dark so verify clicking button switches to light mode
    await expect(page.getByTitle('light mode')).toBeVisible();
})

