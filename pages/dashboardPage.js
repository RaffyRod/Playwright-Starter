const { expect } = require('@playwright/test');
require('dotenv').config();

exports.DashboardPage = class DashboardPage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.userDropDown = page.locator('[class=oxd-userdropdown]');
		this.logoutButton = page.locator('[class=oxd-userdropdown-link]').nth(3);
		this.myActionsTitle = page.locator(
			':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
		);
		this.myActionsCard = page.locator(':nth-child(1) > .oxd-sheet');
	}

	async logout() {
		await this.userDropDown.click();
		await this.logoutButton.click();
	}

	async myActions() {
		await expect(this.myActionsCard).toBeVisible();
		await expect(this.myActionsTitle).toBeVisible();
	}

	async pageObjectModel() {
		await this.logout();
	}
};
