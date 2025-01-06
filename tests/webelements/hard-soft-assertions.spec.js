const {test, expect, selectors} = require('@playwright/test');

test("Playwright Hard and Soft Assertions", async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');

    //HARD ASSERTIONS

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).not.toHaveURL('https://demo.nopcommerce.com/');


     //SOFT ASSERTIONS
     await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/registerInvalid'); // Invalid url
    // Execution continues
     await page.locator('#FirstName').fill("pooja");
     await expect(page.locator('#FirstName')).toHaveValue('pooja');
     await expect(page.locator('#FirstName')).not.toHaveValue('shettigar');
 
     await page.waitForTimeout(5000);
})