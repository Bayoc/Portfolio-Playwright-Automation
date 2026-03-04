import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ae.contact_page';
import { TestCasesPage } from '../pages/ae.testscases_page';


test.describe('Contact Form Functionality and static content', () => {

    test.beforeEach(async ({ page }) => {
        const contactPage = new ContactPage(page);
        await contactPage.blockAds();

    });

    test('Should submit contact form successfully', async ({ page }) => {
        const contactPage = new ContactPage(page);
        await contactPage.navigate('/contact_us');
        await expect(contactPage.contactHeading).toBeVisible();
        await contactPage.fillContactForm('John Doe', 'john.doe@example.com', 'Test Subject', 'This is a test message.');
        await contactPage.submitContactForm();
        await expect(page.locator('.status.alert.alert-success')).toBeVisible();
    });

    test('Verify Test Cases Page Visibility', async ({ page }) => {
        const testCasesPage = new TestCasesPage(page);
        await testCasesPage.navigate('/test_cases');

        // Assertion 
        await expect(testCasesPage.testCasesHeading).toBeVisible();
        await expect(page).toHaveURL(/.*test_cases/);
    });
});

