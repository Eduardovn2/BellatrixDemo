import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
    
    // Page definition.
    page: Page;

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

    //Top Price navegation.
    priceAmountView: Locator;
    shoppingCartButton: Locator;

    //Shopping space.
    //Priority ordem items.
    shopOrderSelector: Locator;
    
    //View Items in the carousel.
    viewFalcon9Item: Locator;
    viewProtonRocketItem: Locator;
    viewProtonMItem: Locator;
    viewSaturnVItem: Locator;
    viewFalconHeavyItem: Locator;

    addFalcon9ToCartButton: Locator;
    addProtonRocketToCartButton: Locator
    addProtonMToCartButton: Locator;
    addSaturnVToCartButton: Locator
    addFalconHeavyToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.logoBellatrix = page.locator('#masthead .site-logo');
        this.searchProduct = page.locator('.woocommerce-product-search input');

        this.homeLink = page.locator('.main-navigation a[href*="home"]');
        this.blogLink = page.locator('.main-navigation a[href*="blog"]');
        this.cartLink = page.locator('.main-navigation a[href*="cart"]');
        this.checkoutLink = page.locator('.main-navigation a[href*="checkout"]');
        this.contactFormLink = page.locator('.main-navigation a[href*="contact"]');
        this.myAccountLink = page.locator('.main-navigation a[href*="my-account"]');
        this.promotionsLink = page.locator('.main-navigation a[href*="promotions"]');

        this.priceAmountView = page.locator('.woocommerce-Price-amount');
        this.shoppingCartButton = page.locator('.add_to_cart_button');

        this.shopOrderSelector = page.locator('.orderby');

        // Carousel items based on product names (fixed, regardless of priority)
        this.viewFalcon9Item = page.locator('a[href*="falcon-9"]').first();
        this.viewProtonRocketItem = page.locator('a[href*="proton-rocket"]').first();
        this.viewProtonMItem = page.locator('a[href*="proton-m"]').first();
        this.viewSaturnVItem = page.locator('a[href*="saturn-v"]').first();
        this.viewFalconHeavyItem = page.locator('a[href*="falcon-heavy"]').first();

        // Add to cart buttons
        this.addFalcon9ToCartButton = page.locator('a[href*="falcon-9"] ~ .add_to_cart_button').first();
        this.addProtonRocketToCartButton = page.locator('a[href*="proton-rocket"] ~ .add_to_cart_button').first();
        this.addProtonMToCartButton = page.locator('a[href*="proton-m"] ~ .add_to_cart_button').first();
        this.addSaturnVToCartButton = page.locator('a[href*="saturn-v"] ~ .add_to_cart_button').first();
        this.addFalconHeavyToCartButton = page.locator('a[href*="falcon-heavy"] ~ .add_to_cart_button').first();
    }
}    