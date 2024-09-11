import {test,expect} from "@playwright/test";
import {LoginPage} from '../../pageObjects/login-page-pom';


const dataset = JSON.parse(JSON.stringify(require('../../utils/testdata.json')))


test.describe.configure({mode:'parallel'}); // Tun the tests of the same file in parallel
/*
test.describe.configure({mode:'serial'}); // By default playwright runs in serial mode. But mode serail will skip the execution of the 
other tes cases if the currently running test fails
*/

test("@WEB Verify login page with valid credential", async ({page})=>{ 
    const login = new LoginPage(page);
    login.lauchURL(dataset.baseURL);
    login.performLogin(dataset.email,dataset.password);
    await page.waitForLoadState('networkidle');
    const toastMessage:any = await login.validateToastMessage();
    expect (await toastMessage=='Login Successfully'); 
})

test("@WEB Verify login page with invalid credential", async ({page})=>{
    const login = new LoginPage(page);
    login.lauchURL(dataset.baseURL);
    login.performLogin(dataset.email,dataset.invalidPassword);
    await page.waitForLoadState('networkidle');
    const toastMessage:any = await login.validateToastMessage();
    expect (toastMessage=='Incorrect email or password.');
})