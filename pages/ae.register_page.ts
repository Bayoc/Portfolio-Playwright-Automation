
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

        // There is no unique identifier for the error message, so we use a more specific locator to target the correct element
        this.errorMessage = page.locator('form[action="/signup"] p[style="color: red;"]');
    }

    async signup(name: string, email: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();
    }
}