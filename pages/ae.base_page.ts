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

    // Listen for page load and handle cookies if the consent button appears
    this.page.on('load', async () => {
      if (await this.consentButton.isVisible().catch(() => false)) {
        await this.consentButton.click().catch(() => { });
      }
    });

    await this.page.goto(path, {
      waitUntil: 'domcontentloaded',
    });
    await this.handleCookies();
  }

  // Method for handling cookies, if they appear
  async handleCookies() {
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
      if (
        url.includes("googleads") ||
        url.includes("doubleclick") ||
        url.includes("adservice") ||
        url.includes("google-analytics") ||
        url.includes("googlesyndication") ||  
        url.includes("adtng") ||
        url.includes("popads") ||
        url.includes("exoclick")
      ) {
        route.abort();
      } else {
        route.continue();
      }
    });
  }
}