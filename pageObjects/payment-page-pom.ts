import { Locator, Page ,expect} from "@playwright/test";

export class PaymentPage{
    page:Page;
    creditCardNo:Locator;
    cvv:Locator;
    cardName:Locator;
    country:Locator;
    countryDropdown:Locator;
    countryOptions:Locator;
    coupon:Locator;
    applyCoupon:Locator;
    couponMessage:Locator;
    placeOrder:Locator;

    constructor(page:Page){
        this.page = page;
        this.creditCardNo = this.page.locator(":text('Credit Card Number ') + input");
        this.cvv = this.page.locator(":text('CVV Code ') + input");
        this.cardName = this.page.locator(":text('Name on Card ') + input");
        this.country = this.page.locator("[placeholder*='Country']");
        this.countryDropdown = this.page.locator(".ta-results");
        this.countryOptions = this.countryDropdown.locator("button");
        this.coupon = this.page.locator("[name='coupon']");
        this.applyCoupon = this.page.locator(".btn-primary");
        this.couponMessage = this.page.locator("[name='coupon'] + p");
        this.placeOrder = this.page.locator(".action__submit");
    }

    async fillShippingInfo(countryValue:string,countrySearchString:string){
        await this.country.pressSequentially(countrySearchString);
        //Save all the matching country to the list and Iterate over it to select he specific country of yours
        const countriesDropdown = await this.countryDropdown;
        await this.countryDropdown.waitFor();
        const matchingCountryCount = await this.countryOptions.count();
        for(let country=0;country<await matchingCountryCount;country++){
            const countryGettext:any = await this.countryOptions.nth(country).textContent();
            if(await countryGettext.includes(countryValue)){
                await this.countryOptions.nth(country).click();
                break;
             }
        }
    }

    async fillPaymentInfo(cardNo:string,cvv:string,cardName:string){
        await this.creditCardNo.click();
        await this.creditCardNo.fill("");
        await this.creditCardNo.fill(cardNo);
        await this.cvv.click();
        await this.cvv.fill(cvv);
        await this.cardName.click();
        await this.cardName.fill(cardName);

    }

    async applyCoupons(coupon){
        await this.coupon.fill(coupon);
        await this.applyCoupon.click();
        await this.couponMessage.waitFor();
        const couponAppliedMessage:any = await this.couponMessage.textContent();
        expect (await couponAppliedMessage == '* Coupon Applied');
    }

    async placeTheOrder(){
        await this.placeOrder.click();
    }

}

