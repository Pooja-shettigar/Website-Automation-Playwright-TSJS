import { Locator, Page, expect } from "@playwright/test";

export class MyOrdersPage{
    page:Page;
    myorder:Locator;
    pageLoad:Locator;
    tableRows:Locator;
    orderIdDetails:Locator;
    constructor(page:Page){
        this.page = page;
        this.myorder = this.page.locator("button[routerlink*='myorders']")
        this.pageLoad = this.page.locator("tbody");
        this.tableRows = this.page.locator("tbody tr");
        this.orderIdDetails = this.page.locator(".col-text");
    }

    async validateOrderNo(orderId:string){
        await this.myorder.click();
        await this.pageLoad.first().waitFor();
        const rows = await this.tableRows;
        for (let i = 0; i < await rows.count(); ++i) {
            const rowOrderId:any = await rows.nth(i).locator("th").textContent();
            if (await orderId.includes(rowOrderId)) {
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }
        const orderIdDetails:any = await this.orderIdDetails.textContent();
        expect(await orderId.includes(orderIdDetails)).toBeTruthy();       
    }
}