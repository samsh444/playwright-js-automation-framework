//import test and expect from playwright/test
import {test, expect} from '@playwright/test';

//set up test for going to website
test('Launch application', async({page}) => {
    await page.goto('https://login.salesforce.com/');

    //getRoleBy for learning playwright locators > Username textbox/field and click method 
    await page.getByRole('textbox', {name: 'Username'}).click();

    //getRoleBy > Password textbox/field try fill to field the field like sendkeys in selenium
    await page.getByRole('textbox', {name: 'Password'}).fill('pass123');

})

