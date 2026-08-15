//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

//set up test for going to website
test('Launch application', async({page}) => {
    await page.goto('https://login.salesforce.com/');

    //username on sales for using relative xpath
    await page.locator("xpath=//input[@id='username']").fill('testuser');

    //login button and click on > css selector
    await page.locator("css=#Login").click();
})