// example.spec.js
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('Login Test', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('./login');
	});

	test('Click on Login with empty fields', async ({ page }) => {
		const loginPage = new LoginPage(page);
		await loginPage.checkLoginPage();
		await loginPage.emptyFieldsAlert();
	});

	test('Login with invalid username and password', async ({ page }) => {
		const loginPage = new LoginPage(page);
		await loginPage.checkLoginPage();
		await loginPage.invalidLogin();
	});

	test('Login with just email typed', async ({ page }) => {
		const loginPage = new LoginPage(page);
		await loginPage.checkLoginPage();
		await loginPage.invalidLoginMissingPassword();
	});

	test('Login with just password typed', async ({ page }) => {
		const loginPage = new LoginPage(page);
		await loginPage.checkLoginPage();
		await loginPage.invalidLoginMissingEmail();
	});
});
