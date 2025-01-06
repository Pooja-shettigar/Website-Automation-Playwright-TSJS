const {test, expect, selectors} = require('@playwright/test');

test("Playwright Assertions", async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');

    //HARD ASSERTIONS

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).not.toHaveURL('https://demo.nopcommerce.com/');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    await expect(page).not.toHaveTitle('nopCommerce');

    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();

    await expect(page.getByPlaceholder('Search store')).toBeEnabled();

    await page.locator('#gender-male').click();
    await expect(page.locator('#gender-male')).toBeChecked();

    await expect(page.locator('#FirstName')).toHaveAttribute('type','text');

    await expect(page.locator('.page-title h1')).toHaveText('Register');
    await expect(page.locator('.page-title h1')).toContainText('Regi');

    const firstName = page.locator('#FirstName');
    await expect(firstName).toBeEnabled();
    await expect(firstName).toBeEmpty();
    await expect(firstName).toBeEditable();
    await firstName.fill("pooja");
    await expect(firstName).toHaveValue('pooja');
    await expect(firstName).not.toHaveValue('shettigar');

    const daysCount = page.locator('select[name="DateOfBirthDay"] option');
    await expect(daysCount).toHaveCount(32);
    await expect(daysCount).not.toHaveCount(30);

    await page.waitForTimeout(5000);

})