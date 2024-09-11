import { LoginPage } from "./login-page-pom"
import { DashboardPage } from "./dashboard-page-pom"
import { CartPage} from "./cart-page-pom"
import { PaymentPage } from "./payment-page-pom"
import { OrderConfirmationPage } from "./orderconfirm-page-pom"
import { MyOrdersPage } from "./myorders-page-pom"
import { Page } from "@playwright/test"

export class POMManager{
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    cartPage:CartPage;
    paymentPage:PaymentPage;
    orderConfirmationPage:OrderConfirmationPage;
    myOrderPage:MyOrdersPage;
    page:Page;

    constructor(page:Page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.paymentPage = new PaymentPage(this.page);
        this.orderConfirmationPage = new OrderConfirmationPage(this.page);
        this.myOrderPage = new MyOrdersPage(this.page);
    }

    async getLoginPage(){
        return this.loginPage;
    }
    async getDashboardPage(){
        return this.dashboardPage;
    }
    async getCartPage(){
        return this.cartPage;
    }
    async getPaymentPage(){
        return this.paymentPage;
    }
    async getOrderconfirmationPage(){
        return this.orderConfirmationPage;
    }
    async getMyordersPage(){
        return this.myOrderPage;
    }
}
