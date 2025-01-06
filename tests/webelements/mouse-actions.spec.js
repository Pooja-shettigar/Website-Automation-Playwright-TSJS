const {test,expect} = require('@playwright/test')

test("Mouse Hover ", async({page})=>{
    await page.goto('https://demo.opencart.com/');

    //Mouse hover
    await page.getByRole('link', { name: 'Desktops' }).hover();
    await page.waitForTimeout(5000);
})

test("Mouse Rightclick ", async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    //Mouse right click
    await page.locator('.context-menu-one').click({button:'right'});

    // //Mouse left click
    // await page.locator('.context-menu-one').click({button:'left'});

    // //Mouse middle click
    // await page.locator('.context-menu-one').click({button:'middle'});
    await page.waitForTimeout(5000);
})

test("Mouse Double click ", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Mouse double click
    await page.getByRole('button',{name:'Copy Text'}).dblclick();

    await expect(page.locator('#field2')).toHaveValue('Hello World!');
    await page.waitForTimeout(5000);
})

test("Mouse Drag and Drop ", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

   // Approach 1
    const source = await page.locator('#draggable')
    const destination = await page.locator('#droppable');

    // await source.dragTo(destination);
    

    // Approach 2
    await source.hover()
    await page.mouse.down()
    await destination.hover()
    await page.mouse.up()

    await page.waitForTimeout(5000);

})