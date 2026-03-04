import { type Page, type Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly consentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Wspólny element dla wszystkich stron na starcie
    this.consentButton = page.getByRole('button', { name: 'Consent' });
  }

  // Wspólna metoda do wchodzenia na stronę z opcją zmiany URL
  async navigate(path: string = '') {
    await this.page.goto(`https://automationexercise.com${path}`, {
      waitUntil: 'domcontentloaded',
    });
    await this.handleCookies();
  }

  // Metoda obsługująca ciasteczka, jeśli się pojawią
  async handleCookies() {
    const consentButton = this.page.getByRole('button', { name: 'Consent' });
    if (await this.consentButton.isVisible()) {
      await this.consentButton.click();
      // Poczekaj aż przycisk zniknie, aby mieć pewność, że cookies zostały zaakceptowane
      await expect(this.consentButton).not.toBeVisible();
    }
  }

  // Metoda do blokowania śmieciowych skryptów (reklam)
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