const {test, expect, selectors} = require('@playwright/test');

test("Playwright Bootstrap MultiSelect - Dropdown", async({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator('.multiselect').click();

    const options = await page.$$('ul>li label');
    for(const values of options){
        const value = await values.textContent();
        if(value.includes('Angular') || value.includes('csharp')){
            await values.click();
        }
    }
    await page.waitForTimeout(5000);
})