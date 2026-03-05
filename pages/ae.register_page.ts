
import { type Locator, type Page, expect } from '@playwright/test';
import { BasePage } from './ae.base_page';

export class RegisterPage extends BasePage {
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.nameInput = page.locator('input[data-qa="signup-name"]');
        this.emailInput = page.locator('input[data-qa="signup-email"]');
        this.signupButton = page.locator('button[data-qa="signup-button"]');
        this.errorMessage = page.locator('p[style="color: red;"]'); // Komunikat o istniejącym mailu
    }

    async signup(name: string, email: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();
    }
}