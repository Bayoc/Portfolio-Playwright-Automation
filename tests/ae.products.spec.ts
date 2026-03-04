import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ae.products_page';

test.describe('Products Catalog & Filtering', () => {

    test.beforeEach(async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.blockAds();
    });

    test('Search product and verify results', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.navigate('/products');

        await productsPage.searchProduct('Blue Top');
        await expect(productsPage.productHeading.filter({ hasText: /Searched Products/i }))
            .toBeVisible();
        await expect(page.locator('.productinfo p')).toContainText('Blue Top');
    });

    test('Verify product categories and sub-categories', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.navigate('/products');

        await productsPage.selectCategory('Women', 'Dress');
        await expect(page).toHaveURL(/.*category_products/);
        await expect(productsPage.productHeading.filter({ hasText: /Women - Dress Products/i }))
            .toBeVisible();
    });

    test('Verify subscription in footer', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.navigate('/');

        await productsPage.subscribe('test@example.com');
        await expect(productsPage.successSubscriptionMsg).toBeVisible();
        await expect(productsPage.successSubscriptionMsg).toHaveText('You have been successfully subscribed!');
    });

    test('Verify brands and their products', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.navigate('/products');
        await expect(productsPage.brandList).toBeVisible();

        await productsPage.selectBrand('Polo');
        await expect(page).toHaveURL(/brand_products\/Polo/);
        await expect(productsPage.productHeading.filter({ hasText: /Polo Products/i })).toBeVisible();

        await productsPage.selectBrand('Madame');
        await expect(page).toHaveURL(/brand_products\/Madame/);
        await expect(productsPage.productHeading.filter({ hasText: /Madame Products/i })).toBeVisible();
    });
});