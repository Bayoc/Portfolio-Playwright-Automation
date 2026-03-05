import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/ae.login_page';
import { RegisterPage } from '../pages/ae.register_page';


test.describe('Authentication & User Management', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page); 
        await loginPage.blockAds();

    });


    test.describe('Login Flows', () => {
        // Test 1
        test('Successful login and logout', async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigate('/login');
            await loginPage.login(process.env.TEST_USER_EMAIL!, process.env.TEST_USER_PASSWORD!);
            await expect(loginPage.logoutButton).toBeVisible();
            await loginPage.logout();
            await expect(page).toHaveURL(/.*login/);
        });
        // Test 2
        test('Login with invalid credentials', async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigate('/login');
            await loginPage.login('invalid@example.com', 'wrongpass');
            await expect(loginPage.errorMessage).toHaveText('Your email or password is incorrect!');
        });
    });

    
    test.describe('Registration Flows', () => {
        // Test 3
        test('Should not register with existing email', async ({ page }) => {
            const registerPage = new RegisterPage(page);
            await registerPage.navigate('/login');
            await registerPage.signup('Tester', 'baiotest@example.com');
            await expect(registerPage.errorMessage).toContainText('Email Address already exist!');
        });
    });

});