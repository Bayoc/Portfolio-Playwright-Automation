import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/ae.cart_page';
import { ProductsPage } from '../pages/ae.products_page';
import { CartModal } from '../pages/ae.cart_modal';

test.describe('Shopping Cart Functionality', () => {

    test.beforeEach(async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.navigate('/products');
    });

    test('Add two different products to cart and verify they are added', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const cartModal = new CartModal(page);
        await productsPage.addToCartByIndex(0);
        await productsPage.addToCartByIndex(1, false);
        await cartModal.waitForModal();
        await cartPage.navigate('/view_cart');
        // Weryfikacja: powinny być 2 produkty w koszyku
        await expect(cartPage.cartRows).toHaveCount(2);
    });

    test('Should remove product from cart and verify cart is empty', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        await productsPage.addToCartByIndex(0, false);

        await cartPage.navigate('/view_cart');
        await expect(cartPage.cartRows).toHaveCount(1);

        // 2. Usuń pierwszy produkt (index 0)
        await cartPage.removeProduct(0);
        // 3. Weryfikacja: poczekaj aż liczba wierszy spadnie o 1
        await expect(cartPage.cartRows).toHaveCount(0);
    });
});