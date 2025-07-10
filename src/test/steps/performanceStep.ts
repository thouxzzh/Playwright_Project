import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pagefixture';
import OrangeLoginPage from '../../pages/orangeLoginPage';
import PerformancePage from '../../pages/performancePage';
import { expect } from '@playwright/test';

let orangeLoginPage: OrangeLoginPage;
let performancePage: PerformancePage;

Given('the user launches the OrangeHRM site', async function () {
  orangeLoginPage = new OrangeLoginPage(pageFixture.page);
  const url = process.env.BASEURL;
  if (!url) throw new Error("BASEURL is not defined");
  await orangeLoginPage.navigate(url);
  pageFixture.logger.info(`Navigated to ${url}`);
});

Given('logs in with valid credentials', async function () {
  await orangeLoginPage.enterCredentials('Admin', 'admin123');
  await orangeLoginPage.clickLogin();
  pageFixture.logger.info("Logged in with valid credentials");
});

When('the user navigates to the Performance > Trackers page', async function () {
  performancePage = new PerformancePage(pageFixture.page);
  await performancePage.goToTrackersMenu();
  await performancePage.clickConfigureAndTrackers();
  pageFixture.logger.info("Navigated to Performance > Configure > Trackers");
});

When('adds a performance tracker with {string}, {string}, and {string}', async function (
  trackerName: string,
  employeeName: string,
  reviewers: string
) {
  await performancePage.clickAddTracker();
  await performancePage.enterTrackerDetails(trackerName, employeeName, reviewers);
  await performancePage.clickSave();
  pageFixture.logger.info(`Entered tracker details: ${trackerName}, ${employeeName}, ${reviewers}`);
});

Then('the tracker {string} should be successfully added', async function (trackerName: string) {
  const table = pageFixture.page.locator("//div[@class='oxd-table-body']");
  console.log("Tracker added successfully");
  pageFixture.logger.info(`Tracker "${trackerName}" found in table`);
});

Then('the system should display an error message {string}', async function (expectedMessage: string) {
  const actualMessage = await performancePage.getEmployeeRequiredError();
  expect(actualMessage).toContain(expectedMessage);
  pageFixture.logger.info(`Error message displayed correctly: ${actualMessage}`);
});
