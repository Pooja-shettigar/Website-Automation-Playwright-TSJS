import { Locator, Page ,expect} from "@playwright/test";

export class CartPage{
    page:Page;
    checkout:Locator;
    pageLoad:Locator;

    constructor(page:Page){
        this.page = page;
        this.checkout = this.page.locator("text=Checkout");
        this.pageLoad = this.page.locator("div li").first();
    }

    async isProductPresent(productName:string){
        const productIsPresent = await this.page.locator("h3:has-text('"+productName+"')").isVisible();
        expect (await productIsPresent).toBeTruthy();
    }
    async clickOnCheckout(){
        await this.checkout.click();
    }

    async waitForPageLoad(){
        await this.pageLoad.waitFor();
    }
}
