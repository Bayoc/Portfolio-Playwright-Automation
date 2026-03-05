import { type Page, type Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly consentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.consentButton = page.getByRole('button', { name: 'Consent' });
  }

  // Enter the main page via URL, with optional path
  async navigate(path: string = '') {
    await this.page.goto(`https://automationexercise.com${path}`, {
      waitUntil: 'domcontentloaded',
    });
    await this.handleCookies();
  }

  // Method for handling cookies, if they appear
  async handleCookies() {
    const consentButton = this.page.getByRole('button', { name: 'Consent' });
    if (await this.consentButton.isVisible()) {
      await this.consentButton.click();
      // Wait until the button disappears to ensure cookies have been accepted
      await expect(this.consentButton).not.toBeVisible();
    }
  }

  // Method for blocking intrusive scripts (ads)
  async blockAds() {
    await this.page.context().route("**/*", (route) => {
      const url = route.request().url();
      if (url.includes("googleads") || url.includes("doubleclick") || url.includes("adservice") || url.includes("google-analytics")) {
        route.abort();
      } else {
        route.continue();
      }
    });
  }
}