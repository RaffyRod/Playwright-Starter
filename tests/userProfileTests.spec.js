const { test, expect } = require('@playwright/test');
const { UserProfilePage } = require('../pages/userProfilePage');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');

test.describe('User profile tests', () => {
	test.beforeEach(async ({ page }) => {
		const login = new LoginPage(page);
		await page.goto('./login');
		await login.login();
	});

	test.afterEach(async ({ page }) => {
		const dashboard = new DashboardPage(page);
		await dashboard.logout();
	});

	test('Click on About', async ({ page }) => {
		const userProfile = new UserProfilePage(page);
		await userProfile.aboutSection();
	});

	test('Click on Support', async ({ page }) => {
		const userProfile = new UserProfilePage(page);
		await userProfile.supportSection();
	});

	test('Click on Change password', async ({ page }) => {
		const userProfile = new UserProfilePage(page);
		await userProfile.changePasswordSection();
		await expect(userProfile.changePasswordHeader).toHaveText([`Update Password`]);
	});

	test('Close user profile section by clicking somewhere else', async ({
		page,
	}) => {
		const userProfile = new UserProfilePage(page);
		const dashboard = new DashboardPage(page);
		await userProfile.userProfileSection();
		await dashboard.clickOnDashboardPage();
	});
});
