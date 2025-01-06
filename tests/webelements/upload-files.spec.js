const {test, expect, selectors} = require('@playwright/test');

test("Playwright Upload Single files", async({page})=>{
    await page.goto('https://www.filemail.com/features/upload-files');
    
 
    await page.locator('[type="file"]').setInputFiles('/Users/poojashettigar/Downloads/LSSWB+2022+Course+Slides.pdf');
    await page.waitForTimeout(5000)

})

test("Playwright Upload Multiple files", async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    
    //Upload files
    await page.locator('#filesToUpload').
    setInputFiles(
        ['/Users/poojashettigar/Downloads/LSSWB+2022+Course+Slides.pdf',
        '/Users/poojashettigar/Downloads/Udemy SixSigma Whitebelt.pdf']);
    await page.waitForTimeout(2000)


    //remove files
    await page.locator('#filesToUpload').setInputFiles([]);
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
        

    await page.waitForTimeout(5000)
})