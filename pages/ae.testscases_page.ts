import {type Locator, type Page, expect} from '@playwright/test';
import {BasePage} from './ae.base_page';

export class TestCasesPage extends BasePage {
    readonly testCasesHeading: Locator;


    constructor(page: Page) {
        super(page);
        this.testCasesHeading = page.getByRole('heading', { name: /Test Cases/i }).first();
    }   
}