import { type Locator, type Page, expect } from '@playwright/test';
import { BasePage } from './ae.base_page';
import { LoginCredentials } from './types';

export class LoginPage extends BasePage {

    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator('input[data-qa="login-email"]');
        this.passwordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');

        // There is no unique identifier for the error message, so we use a more specific locator to target the correct element
        this.errorMessage = page.locator('form[action="/login"] p[style="color: red;"]');
        this.logoutButton = page.locator('a[href="/logout"]');
    }

    async login(credentials: LoginCredentials) {
        await this.emailInput.fill(credentials.email);
        await this.passwordInput.fill(credentials.password);
        await this.loginButton.click();
    }

    async logout() {
        await this.logoutButton.click();
    }
}