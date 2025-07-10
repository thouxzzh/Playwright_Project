import { Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';

export default class OrangeLoginPage {
  private wrapper: PlaywrightWrapper;

  private selectors = {
    usernameField: 'input[name="username"]',
    passwordField: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    invalidLoginError: '//div[@class="oxd-alert-content oxd-alert-content--error"]',
    pageTitle: 'title',
  };

  constructor(private page: Page) {
    this.wrapper = new PlaywrightWrapper(page);
  }

  async navigate(url: string) {
    await this.wrapper.goto(url);
  }

  async enterCredentials(username: string, password: string) {
    await this.page.fill(this.selectors.usernameField, username);
    await this.page.fill(this.selectors.passwordField, password);
  }

  async clickLogin() {
    await this.wrapper.waitAndClick(this.selectors.loginButton);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

//   async isInvalidLoginVisible(): Promise<boolean> {
//     const errorLocator = this.page.locator(this.selectors.invalidLoginError);
//     return await errorLocator.isVisible();
//   }

  async isInvalidLoginVisible(): Promise<boolean> {
  try {
    const errorMessage = this.page.locator("//div[@class='oxd-alert-content oxd-alert-content--error']");
    await errorMessage.waitFor({ state: 'visible', timeout: 5000 });
    return await errorMessage.isVisible();
  } catch {
    return false;
  }
}

  async isUsernameFieldVisible(): Promise<boolean> {
    const usernameLocator = this.page.locator(this.selectors.usernameField);
    return await usernameLocator.isVisible();
  }
}
