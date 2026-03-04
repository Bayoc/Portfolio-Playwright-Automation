// pages/ae.products_page.ts
import { type Locator, type Page, expect } from '@playwright/test';
import { BasePage } from './ae.base_page';

export class ProductsPage extends BasePage {
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly productHeading: Locator;
    readonly subscriptionInput: Locator;
    readonly subscriptionButton: Locator;
    readonly successSubscriptionMsg: Locator;
    readonly brandList: Locator;
    readonly addProductToCart: Locator
    readonly productIndex: Locator;
    readonly cartModal: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.productHeading = page.getByRole('heading');
        this.subscriptionInput = page.locator('#susbscribe_email');
        this.subscriptionButton = page.locator('#subscribe');
        this.successSubscriptionMsg = page.locator('.alert-success');
        this.brandList = page.locator('.brands-name');
        this.addProductToCart = page.locator('.productinfo.text-center a').filter({ hasText: 'Add to cart' });
        this.productIndex = page.locator('.single-products');
        this.cartModal = page.locator('#cartModal');

    }

    async searchProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async subscribe(email: string) {
        await this.subscriptionInput.fill(email);
        await this.subscriptionButton.click();
    }

    // Metoda do wybierania kategorii (np. Women > Dress)
    async selectCategory(category: string, subCategory: string) {
        await this.page.click(`a[href="#${category}"]`);
        await this.page.click(`a:has-text("${subCategory}")`);
    }

    async selectBrand(brandName: string) {
        await this.page.click(`.brands-name a:has-text("${brandName}")`);
    }

    async addToCartByIndex(index: number) {
        const product = this.productIndex.nth(index);

        await product.hover();
        const addToCartBtn = product.locator('.product-overlay .add-to-cart').click();

        await this.handleCookies();
 
        const continueButton = this.page.getByRole('button', { name: /Continue Shopping/i });
        await continueButton.click();

        await expect(this.page.locator('#cartModal')).not.toBeVisible();

    }
}