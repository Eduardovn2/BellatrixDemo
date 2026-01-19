import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
    
    // Page definition.
    page: Page;

    //Menu Topping.
    //Top menu.
    logoBellatrix: Locator;
    searchProduct: Locator;

    //Top Navigation Menu.
    homeLink: Locator;
    blogLink: Locator;
    cartLink: Locator;
    checkoutLink: Locator;
    contactFormLink: Locator;
    myAccountLink: Locator;
    promotionsLink: Locator;

    
    //Constructor
    constructor(page: Page) {
        this.page = page;

        //Menu Topping.
        //Top menu.
        this.logoBellatrix = page.locator('img.custom-logo');
        this.searchProduct = page.locator('#woocommerce-product-search-field-0');
        
         //Top Navigation Menu.
        this.homeLink = page.getByLabel('class=current_page_item');
        this.blogLink = page.getByText('Blog');
        this.cartLink = page.locator('text=Cart');
        this.checkoutLink = page.locator('text=Checkout');
        this.contactFormLink = page.locator('text=Contact Form');
        this.myAccountLink = page.locator('text=My Account');
        this.promotionsLink = page.locator('text=Promotions');

    }
    async expectLoaded(){
        expect(this.logoBellatrix).toBeVisible();
    }
}    