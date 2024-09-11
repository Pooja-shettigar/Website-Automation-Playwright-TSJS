import { Locator, Page, expect } from "@playwright/test";

export class OrderConfirmationPage{
    page:Page;
    orderMessage:Locator;
    orderNo:Locator;

    constructor(page:Page){
        this.page = page;
        this.orderMessage = this.page.locator(".hero-primary");
        this.orderNo = this.page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async captureOrderNo(){ 
        await expect(this.orderMessage).toHaveText(" Thankyou for the order. ");
        const orderId = await this.orderNo.textContent();
        console.log(orderId);
        return await orderId;
    }

}