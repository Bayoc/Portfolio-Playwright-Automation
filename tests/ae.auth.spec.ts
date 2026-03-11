import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/ae.login_page';
import { RegisterPage } from '../pages/ae.register_page';
import { ENV } from '../playwright.config';


test.describe('Authentication & User Management', () => {


    test.describe('Login Flows', () => {

        test('Successful login and logout', async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigate('/login');
            await loginPage.login({
                email: ENV.email,
                password: ENV.password
            });
            await expect(loginPage.logoutButton).toBeVisible();
            await loginPage.logout();
            await expect(page).toHaveURL(/.*login/);
        });

        test('Login with invalid credentials', async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigate('/login');
            await loginPage.login({
                email: 'invalid@example.com',
                password: 'wrongpassword'
            });
            await expect(loginPage.errorMessage).toHaveText('Your email or password is incorrect!');
        });
    });


    test.describe('Registration Flows', () => {

        test('Should not register with existing email', async ({ page }) => {
            const registerPage = new RegisterPage(page);
            await registerPage.navigate('/login');
            await registerPage.signup('Tester', 'baiotest@example.com');
            await expect(page).toHaveURL(/.*signup/);
            await expect(registerPage.errorMessage).toContainText('Email Address already exist!');
        });
    });

});