const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');

test.describe('Dashboard tests', () => {
	test.beforeEach(async ({ page }) => {
		const login = new LoginPage(page);
		await page.goto('./login');
		await login.login();
	});

	test('Check My Actions section', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		await dashboard.myActions();
		await expect(dashboard.myActionsTitle).toHaveText([`My Actions`]);
	});

	test.afterAll(async ({ page }) => {
		const dashboard = new DashboardPage(page);
		await dashboard.logout();
	});
});
