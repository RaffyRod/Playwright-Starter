// playwright-dev-page.js
const { expect } = require('@playwright/test');
require('dotenv').config();

exports.LoginPage = class LoginPage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.loginHeader = page.getByRole('heading', { name: 'Login' });
		this.usernameDetails = page.getByText('Username : AdminPassword : admin123');
		this.userNameInput = page.getByPlaceholder('Username');
		this.userNameRequiredWarning = page.getByText('Required').first();
		this.passwordInput = page.getByPlaceholder('Password');
		this.passwordRequiredWarning = page.getByText('Required').nth(1);
		this.loginButton = page.getByRole('button', { name: 'Login' });
		this.forgotPasswordButton = page.getByText('Forgot your password?');
	}

	async checkLoginPage() {
		await expect(this.loginHeader).toBeVisible();
		await expect(this.usernameDetails).toBeVisible();
		await expect(this.userNameInput).toBeVisible();
		await expect(this.passwordInput).toBeVisible();
		await expect(this.forgotPasswordButton).toBeVisible();
	}

	async emptyFieldsAlert() {
		await this.loginButton.click();
		await expect(this.userNameRequiredWarning).toBeVisible();
		await expect(this.passwordRequiredWarning).toBeVisible();
	}

	async pageObjectModel() {
		await this.checkLoginPage();
	}
};
