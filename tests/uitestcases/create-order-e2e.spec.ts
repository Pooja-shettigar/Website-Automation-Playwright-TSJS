import {POMManager} from '../../pageObjects/pom-manager';
import {test, expect} from '@playwright/test';

const dataset = JSON.parse(JSON.stringify(require('../../utils/testdata.json')))

//Run the same test case for the 2 different set of the data
for(const data of dataset.orderdata ){
   test(`@WEB Createthe order for the product - ${data.productName}`, async ({page})=>{ 

      const pomManager = new POMManager(page);
      const login = await pomManager.getLoginPage();
      await login.lauchURL(dataset.baseURL);
      await login.performLogin(dataset.email, dataset.password);
      await page.waitForLoadState('networkidle');
      const toastMessage = await login.validateToastMessage();
      expect (toastMessage=='Login Successfully');

      const dashboard = await pomManager.getDashboardPage();
      await dashboard.addProductsToCart(data.productName);
      await dashboard.navigateToCart();

      const cart = await pomManager.getCartPage();
      await cart.waitForPageLoad();
      await cart.isProductPresent(data.productName);
      await cart.clickOnCheckout();

      const payment = await pomManager.getPaymentPage();
      await payment.fillPaymentInfo(data.creditCardNo,data.cvv, data.cardName);
      await payment.applyCoupons(data.coupon);
      await payment.fillShippingInfo(data.shippingCountry,data.countrySearchString);
      await payment.placeTheOrder();

      const orderconfirmation = await pomManager.getOrderconfirmationPage();
      const orderNo:any = await orderconfirmation.captureOrderNo();

      const myOrders = await pomManager.getMyordersPage();
      await myOrders.validateOrderNo(orderNo);
   });
}


