import { type Locator, type Page, expect } from '@playwright/test';
import { BasePage } from './ae.base_page';


export class ContactPage extends BasePage {
    readonly contactHeading: Locator;
    readonly contactNameInput: Locator;
    readonly contactEmailInput: Locator
    readonly contactSubjectInput: Locator;
    readonly contactMessageInput: Locator
    readonly uploadInput: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;


    constructor(page: Page) {
        super(page);
        this.contactHeading = page.getByRole('heading', { name: 'Get In Touch' });
        this.contactNameInput = page.locator('input[data-qa="name"]');
        this.contactEmailInput = page.locator('input[data-qa="email"]');
        this.contactSubjectInput = page.locator('input[data-qa="subject"]');
        this.contactMessageInput = page.locator('textarea[data-qa="message"]');
        this.uploadInput = page.locator('input[type="file"]');
        this.submitButton = page.locator('input[data-qa="submit-button"]');
        this.successMessage = page.locator('.alert-success');
    }

    async fillContactForm(name: string, email: string, subject: string, message: string) {
        await this.contactNameInput.fill(name);
        await this.contactEmailInput.fill(email);
        await this.contactSubjectInput.fill(subject);
        await this.contactMessageInput.fill(message);
    }

    async submitContactForm() {
        this.page.once('dialog', dialog => dialog.accept());
        await this.page.click('input[data-qa="submit-button"]');
    }

    async uploadFile(filePath: "D:\Nauka\!!!QA Tester\Pliki testowe\testfile.txt") {
        await this.uploadInput.setInputFiles(filePath);
    }

    async verifySuccessMessage() {
        await expect(this.successMessage).toHaveText('Success! Your details have been submitted successfully.');
    }

}