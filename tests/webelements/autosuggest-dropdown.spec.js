const {test, expect, selectors} = require('@playwright/test');

test("Playwright Autosuggest - Dropdown", async({page})=>{
    await page.goto('https://www.redbus.in/');

    await page.locator('#src').click();
    await page.locator('#src').fill("Mang");

    await page.waitForSelector('//li[contains(@class,"sc-iwsKbI")]/div/text[1]');
    const options = await page.$$('//li[contains(@class,"sc-iwsKbI")]/div/text[1]');
    
    for(const option of options){
        const value = await option.textContent();
        if(value.includes('Pumpwell')){
            await option.click();
            break;
        }
       
    }

    await page.waitForTimeout(5000);
})