//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

//set up test for going to website
test('Launch application', async({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.html');

    //next step for checking the title of the app
    await expect(page).toHaveTitle(/parabank/i);
})
