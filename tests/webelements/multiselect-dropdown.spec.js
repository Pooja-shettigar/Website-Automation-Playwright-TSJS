const {test, expect, selectors} = require('@playwright/test');

test("Playwright MultiSelect - Dropdown", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.selectOption('#colors',['red','yellow','green'])
    
    await page.waitForTimeout(5000);
  

})