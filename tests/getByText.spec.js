//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

//set up test for going to website
test('Launch application', async({page}) => {
    await page.goto('https://login.salesforce.com/');

    //getByText for locator
    await page.getByText('Forgot Your Password').click();
})