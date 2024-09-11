import { Locator, Page } from "@playwright/test";

export class DashboardPage{
    page:Page;
    totalProducts:Locator;
    productTitles:Locator;
    cart:Locator;

    constructor(page:Page){
        this.page = page;
        this.totalProducts =  this.page.locator(".card-body");
        this.productTitles = this.page.locator(".card-body b");
        this.cart = this.page.locator("[routerlink*='cart']");   
    }

    async addProductsToCart(productName:string){
        await this.page.waitForLoadState('networkidle');
        await this.productTitles.first().waitFor();
        const totalProductsCount = await this.totalProducts.count();
        const productTitles = await this.productTitles.allTextContents();        
     
        //Out of many products, add the specific product to the cart -> ADIDAS ORIGINAL
        for(let product =0;await product<totalProductsCount;product++){
           if(await this.totalProducts.nth(product).locator("b").textContent()===productName){
              await this.totalProducts.nth(product).locator("text=' Add To Cart'").click();
              break;
           }
        }       
    }
    async navigateToCart(){
        await this.cart.click();
    }
}