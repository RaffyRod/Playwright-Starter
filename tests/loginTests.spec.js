const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('Login tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('./login');
	});

	test('Click on Login with empty fields', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.emptyFieldsAlert();
	});

	test('Login with invalid username and password', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.invalidLogin();
	});

	test('Login with just email typed', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.invalidLoginMissingPassword();
	});

	test('Login with just password typed', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.invalidLoginMissingEmail();
	});
});
