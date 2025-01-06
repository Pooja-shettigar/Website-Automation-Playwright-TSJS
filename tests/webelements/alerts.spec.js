const {test,expect} = require('@playwright/test')

test("Simple Alert handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enable the alert before clicking
    //Simple Alert
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })
    await page.click('#alertBtn');
    await page.waitForTimeout(5000);

})

test("Confirmation Alert handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enable the alert before clicking
    //Confirmation Alert - cancel action
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss(); // cancel action
    })
    await page.click('#confirmBtn');
    await page.waitForTimeout(5000);
})

test("Prompt Alert handling", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enable the alert before clicking
    //Prompt Alert - cancel action
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Pooja'); // Input and accept alert
    }) 
    await page.click('#promptBtn');
    expect(await page.locator('#demo').textContent()).toContain('Pooja');
    await page.waitForTimeout(5000);

})