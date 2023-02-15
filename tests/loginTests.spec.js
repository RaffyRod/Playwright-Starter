// example.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.beforeEach(async ({ page }) => {
	await page.goto('./login');
});

test('Click on Login with empty fields', async ({ page }) => {
	const loginPage = new LoginPage(page);
	await loginPage.checkLoginPage();
	await loginPage.emptyFieldsAlert();
});
