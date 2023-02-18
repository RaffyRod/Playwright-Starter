const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');

test.describe('Dashboard tests', () => {
	test.beforeEach(async ({ page }) => {
		const login = new LoginPage(page);
		await page.goto('./login');
		await login.login();
	});

	test.afterEach(async ({ page }) => {
		const dashboard = new DashboardPage(page);
		await dashboard.logout();
	});

	test('Check Time at Work section', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		await dashboard.timeAtWork();
		await expect(dashboard.timeAtWorkTitle).toHaveText([`Time at Work`]);
	});

	test('Check My Actions section', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		await dashboard.myActions();
		await expect(dashboard.myActionsTitle).toHaveText([`My Actions`]);
	});

	test('Check Quick Launch section', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		await dashboard.quickLaunch();
		await expect(dashboard.quickLaunchTitle).toHaveText([`Quick Launch`]);
	});

	test('Check Buzz Latest Posts', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		await dashboard.buzzLatestPost();
		await expect(dashboard.BuzzLatestPostTitle).toHaveText([`Buzz Latest Posts`]);
	});

	test('Check Employees on Leave', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		await dashboard.employeeOnLeaveToday();
		await expect(dashboard.employeeOnLeaveTodayTittle).toHaveText([
			`Employees on Leave Today`,
		]);
	});

	test('Check Employee Distribution by Sub Unit', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		await dashboard.employeeDistributionBySubUnit();
		await expect(dashboard.employeeDistributionBySubUnitTitle).toHaveText([
			`Employee Distribution by Sub Unit`,
		]);
	});

	test('Check Employee Distribution by Location', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		await dashboard.employeeDistributionByLocation();
		await expect(dashboard.employeeDistributionByLocationTitle).toHaveText([
			`Employee Distribution by Location`,
		]);
	});
});
