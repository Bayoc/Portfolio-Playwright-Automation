import { type Locator, type Page, expect } from '@playwright/test';
import { BasePage } from './ae.base_page';
import { ContactFormData } from './types';

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
        this.successMessage = page.locator('.status.alert.alert-success');
    }

    async fillContactForm(data: ContactFormData) {
        await this.contactNameInput.fill(data.name);
        await this.contactEmailInput.fill(data.email);
        if (data.subject) {
            await this.contactSubjectInput.fill(data.subject);
        }
        await this.contactMessageInput.fill(data.message);
    }

    async submitContactForm() {
        this.page.once('dialog', dialog => dialog.accept());
        await this.submitButton.click();
    }

    /* async uploadFile(filePath: "D:\Nauka\!!!QA Tester\Pliki testowe\testfile.txt") {
        await this.uploadInput.setInputFiles(filePath);
    }
        */

}