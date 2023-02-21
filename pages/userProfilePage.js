const { expect } = require('@playwright/test');

exports.UserProfilePage = class UserProfilePage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.userDropDown = page.locator('[class=oxd-userdropdown]');
		this.aboutButton = page.locator('[class=oxd-userdropdown-link]').nth(0);
		this.aboutCard = page.locator(
			'.oxd-dialog-container-default--inner > .oxd-sheet'
		);
		this.dismissAboutCard = page.locator('.oxd-dialog-close-button');
		this.supportButton = page.locator('[class=oxd-userdropdown-link]').nth(1);
		this.supportCard = page.locator('.orangehrm-card-container');
		this.changePasswordButton = page
			.locator('[class=oxd-userdropdown-link]')
			.nth(2);
		this.changePasswordHeader = page.locator(
			'.orangehrm-card-container > .oxd-text--h6'
		);
		this.logoutButton = page.locator('[class=oxd-userdropdown-link]').nth(3);
	}

	async aboutSection() {
		await this.userDropDown.click();
		await this.aboutButton.click();
		await expect(this.aboutCard).toBeVisible();
		await expect(this.dismissAboutCard).toBeVisible();
		await this.dismissAboutCard.click();
	}

	async supportSection() {
		await this.userDropDown.click();
		await this.supportButton.click();
		await expect(this.supportCard).toBeVisible();
	}

	async changePasswordSection() {
		await this.userDropDown.click();
		await this.changePasswordButton.click();
		await expect(this.changePasswordHeader).toBeVisible();
	}

	async userProfileSection() {
		await this.userDropDown.click();
	}

	async pageObjectModel() {
		await this.aboutSection();
		await this.supportSection();
		await this.changePasswordSection();
		await this.clickOnUserProfile();
	}
};
