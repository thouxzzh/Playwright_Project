import { expect, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';

export default class HeaderPage {
  private wrapper: PlaywrightWrapper;

  constructor(private page: Page) {
    this.wrapper = new PlaywrightWrapper(page);
  }

  async clickLoginLink() {
    await this.wrapper.waitAndClick("//span[contains(text(),'Login')]");
  }

  async getLoggedInUsername(expectedUsername: string) {
    const locator = this.page.locator(`//span[contains(text(),'${expectedUsername}')]`);
    await locator.waitFor({ state: "visible" });
    return await locator.textContent();
  }

  async clickCartIcon() {
    const cartIcon = this.page.locator("//mat-icon[contains(text(),'shopping_cart')]").first();
    await cartIcon.click();
  }
}
