const {test,expect} = require('@playwright/test')

test("Frames demo", async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const parentFrame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'}); // url
   
    const chileFrames = await parentFrame.childFrames();
    await chileFrames[0].getByText('Web Testing', { exact: true }).click();
    await expect(chileFrames[0].getByLabel('Web Testing')).toBeChecked();

    await page.waitForTimeout(5000);
})