const {test,expect} = require('@playwright/test')

test('Locating Multiple Elements', async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

    //Grab all the links in the web page
    const links = await page.$$('a');

    for(const link of links){
        const linkText = await link.textContent();
        console.log(linkText);
    }
    await page.waitForTimeout(5000);
})