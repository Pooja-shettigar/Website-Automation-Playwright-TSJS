const {test, expect} = require('@playwright/test');

test("Playwright BuildIn Locators", async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   
    const comapnyLogo = await page.getByAltText('company-branding');
    await expect(comapnyLogo).toBeVisible(); 

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {type:'Submit'}).click();

    await page.getByText('Admin').click();

    await page.getByTitle('Help').click();

    await page.waitForTimeout(5000);
})
