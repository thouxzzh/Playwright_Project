import { Page, expect } from '@playwright/test';

export default class PerformancePage {
  constructor(private page: Page) {}

  private locators = {
    performanceTab: "//span[text()='Performance']",
    configureTab: "//span[text()='Configure ']",
    trackersLink: "//a[text()='Trackers']",
    addButton: "//button[normalize-space()='Add']",
    trackerNameInput: "(//input[@class='oxd-input oxd-input--active'])[2]",
    employeeNameInput: "(//input[@placeholder='Type for hints...'])[1]",
    reviewerInput: "(//input[@placeholder='Type for hints...'])[2]",
    saveButton: "//button[normalize-space()='Save']",
    requiredEmployeeError: "//span[text()='Required']",
    trackerRows: "//div[@class='oxd-table-row oxd-table-row--with-border']"
  };

  async goToTrackersMenu() {
    await this.page.locator(this.locators.performanceTab).click();
  }

  async clickConfigureAndTrackers() {
    await this.page.locator(this.locators.configureTab).click();
    await this.page.locator(this.locators.trackersLink).click();
  }

  async clickAddTracker() {
    await this.page.locator(this.locators.addButton).click();
  }

  async enterTrackerDetails(trackerName: string, employeeName: string, reviewers: string) {
    if (trackerName)
      await this.page.locator(this.locators.trackerNameInput).fill(trackerName);

    if (employeeName) {
      const empInput = this.page.locator(this.locators.employeeNameInput);
      await empInput.fill(employeeName);
      await empInput.press('ArrowDown');
      await empInput.press('Enter');
    }

    if (reviewers) {
      const reviewerInput = this.page.locator(this.locators.reviewerInput);
      await reviewerInput.fill(reviewers);
      await reviewerInput.press('ArrowDown');
      await reviewerInput.press('Enter');
    }
  }

  async clickSave() {
    await this.page.locator(this.locators.saveButton).click();
  }

  async verifyTrackerAdded(trackerName: string): Promise<boolean> {
  const trackerCell = this.page
    .locator("//div[@class='oxd-table-cell oxd-padding-cell']")
    .filter({ hasText: trackerName });
  return await trackerCell.first().isVisible();
}

  async getEmployeeRequiredError(): Promise<string> {
  const errorLocator = this.page.locator(this.locators.requiredEmployeeError).first();
  await expect(errorLocator).toBeVisible();
  const text = await errorLocator.textContent();
  return text ?? '';
}

}
