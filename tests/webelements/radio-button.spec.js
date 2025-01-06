const {test, expect, selectors} = require('@playwright/test');

test("Playwright RadioButtons", async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');
    
    const male=page.locator('#gender-male');
    const female=page.locator('#gender-female');

    await male.check();

    await expect(male).toBeChecked();
    expect(await male.isChecked()).toBeTruthy();
    expect(await female.isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

})