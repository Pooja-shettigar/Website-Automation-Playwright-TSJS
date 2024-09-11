import { Locator, Page } from "@playwright/test";

export class LoginPage{
    page:Page;
    userName:Locator;
    password:Locator;
    loginButton:Locator;
    toastMessage:Locator;

    constructor (page:Page){
        this.page = page;
        this.userName= this.page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginButton = page.locator("[value='Login']");
        this.toastMessage = page.locator('#toast-container');
    }

    async lauchURL(baseURL:string){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async performLogin(userName:string,password:string){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async validateToastMessage(){
        console.log("Toast message -> "+await this.toastMessage.textContent());
        return await this.toastMessage.textContent();
    }
}