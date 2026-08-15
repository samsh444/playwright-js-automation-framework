//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

//set up test for going to website
test('Launch application', async({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.html');

    //test getRoleBy for playwright locators
    await page.getByRole('link', {name: 'Forgot login info?'}).click();
})
