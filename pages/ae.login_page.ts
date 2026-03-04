import { type Locator, type Page, expect } from '@playwright/test';
import { BasePage } from './ae.base_page';

export class LoginPage extends BasePage {

    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        super(page);
        // Selectors for the login page elements
        this.emailInput = page.locator('input[data-qa="login-email"]');
        this.passwordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
        this.errorMessage = page.locator('form[action="/login"] p');
        this.logoutButton = page.locator('a[href="/logout"]');
    }

    async goto() {
        await this.navigate('/login');
    }

    async login(email: string, pass: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

    async logout() {
        await this.logoutButton.click();
    }
}