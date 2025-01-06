const {test, expect, selectors} = require('@playwright/test');

test("Playwright Checkboxes", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const sunday=page.locator('#sunday');
    
    //check
    await sunday.check();
    await expect(sunday).toBeChecked();
    expect(await sunday.isChecked()).toBeTruthy();

    //uncheck
    if(await sunday.toBeChecked){
        await sunday.uncheck();
    }

    //select Multiple checkboxes
    const days =[
        "#sunday",
        "#tuesday",
        "#friday"
    ]

    for(const d of days){
        page.locator(d).check();
        await expect(page.locator(d)).toBeChecked();
    }

    await page.waitForTimeout(5000);

})