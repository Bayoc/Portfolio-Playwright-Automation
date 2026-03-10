import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './ae.base_page';

export class CartModal extends BasePage {
    readonly modal: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        super(page);
        this.modal = page.locator('#cartModal');
        this.continueButton = page.getByRole('button', { name: /Continue Shopping/i });
    }

    async continueShopping() {
        await this.continueButton.click();
        await expect(this.modal).not.toBeVisible();
    }
 
    async waitForModal() {
        await expect(this.modal).toBeVisible({ timeout: 10000 });
    }

}