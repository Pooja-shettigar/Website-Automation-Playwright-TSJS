const {test, expect, selectors} = require('@playwright/test');

test("Playwright Dropdown", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
  //CASE 1 - Select type of element
  const dropdown = page.locator('#country');
  await dropdown.selectOption('Germany'); // visible test
  await dropdown.selectOption({label:'India'}); //label: visible text
  await dropdown.selectOption({value:'australia'}); // By value
  await dropdown.selectOption({index:4}); // By Index

  await page.selectOption('#country','Brazil');

  //Assertions
  const optionCount = page.locator('#country option')
  await expect(optionCount).toHaveCount(10);

  //Multiple options retrieve
  const options = await page.$$('#country option')
  console.log("Total options count ->" , options.length);
  expect(options.length).toBe(10);

  //Check for the specific value in the dropdown
  const values = await dropdown.textContent();
  expect(values.includes('Brazil')).toBeTruthy();

  await page.waitForTimeout(5000);

})