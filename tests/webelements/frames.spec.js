const {test,expect} = require('@playwright/test')

test("Frames demo", async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //Total number of frames
    console.log("Total number of frmes ->", page.frames().length);

    //Enter the values in first frame
    //CASE 1
    const frame1 = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]');
    await frame1.fill("Pooja")

    //CASE2
   // const frame2 = await page.frame('frame name if we have');
    const frame2 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'}); // url
    // await frame2.locator('[name="mytext1"]').fill("Shettigar")
    //OR
    await frame2.fill('[name="mytext1"]','Shettigar')

    await page.waitForTimeout(5000);
})