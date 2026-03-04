import { type Locator, type Page, expect } from '@playwright/test';
import { BasePage } from './ae.base_page';

export class CartPage extends BasePage {
    readonly cartHeading: Locator;
    readonly cartItems: Locator;
    readonly emptyCartMessage: Locator;
    readonly proceedToCheckoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly cartRows: Locator;

    constructor(page: Page) {
        super(page);
        this.cartHeading = page.getByRole('heading', { name: /Shopping Cart/i }).first();
        this.cartItems = page.locator('.cart_info .cart_item');
        this.emptyCartMessage = page.locator('.cart_info p').filter({ hasText: /Cart is empty!/i });
        this.proceedToCheckoutButton = page.getByRole('button', { name: /Proceed To Checkout/i });
        this.continueShoppingButton = page.getByRole('button', { name: /Continue Shopping/i });
        this.cartRows = page.locator('tr[id^="product-"]');

    }

    async getProductQuantity(index: number) {
        const row = this.cartRows.nth(index);
        return await row.locator('.cart_quantity button').innerText
    }

    async removeProduct(index: number) {
        const row = this.cartRows.nth(index);
        await row.locator('.cart_quantity_delete').click();
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

}



