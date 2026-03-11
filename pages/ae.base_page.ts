import { type Page, type Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly consentButton: Locator;

  private readonly blockedDomains: string[] = [
    'googleads',
    'doubleclick',
    'adservice',
    'google-analytics',
    'googlesyndication',
    'adtng',
    'popads',
    'exoclick'
  ];

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
      if (this.blockedDomains.some(domain => url.includes(domain))) {
        route.abort();
      } else {
        route.continue();
      }
    });
  }
}