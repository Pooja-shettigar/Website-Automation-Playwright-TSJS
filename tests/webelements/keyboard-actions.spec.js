const {test, expect, selectors} = require('@playwright/test');

test("Playwright keyboard actions", async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');

    await page.getByPlaceholder('Paste one version of the text here.').fill('Playwright automation')

    await page.keyboard.press('Meta+A')
    await page.keyboard.press('Meta+C')

    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    await page.keyboard.press('Meta+V')

    await page.waitForTimeout(5000)

})