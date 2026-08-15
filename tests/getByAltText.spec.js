//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

//set up test for going to website
test('Launch application', async({page}) => {
    await page.goto('https://playwright.dev/docs/intro');

    //getByAltText() to click on playwright icon/image to go back to playwright home page
    //await page.getByAltText('Playwright logo').first().click();

    //scope to visable one
    await page.getByAltText('Playwright logo').and(page.locator(':visible')).click();
})

