// import { Page } from '@playwright/test';
// import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';

// export default class LoginPage {
//   private wrapper: PlaywrightWrapper;

//   constructor(private page: Page) {
//     this.wrapper = new PlaywrightWrapper(page);
//   }

//   async enterUsername(username: string) {
//     await this.page.locator("//input[@id='mat-input-0']").fill(username);
//   }

//   async enterPassword(password: string) {
//     await this.page.locator("//input[@id='mat-input-1']").fill(password);
//   }

//   async clickLoginButton() {
//     await this.wrapper.waitAndClick("(//span[contains(text(),'Login')])[2]");
//   }

//   async getLoginFailureMessage(): Promise<string | null> {
//     const locator = this.page.locator("//mat-error[@id='mat-mdc-error-0']");
//     await locator.waitFor({ state: "visible" });
//     return await locator.textContent();
//   }
// }


// import { Page, Locator } from '@playwright/test';
// import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';

// export default class LoginPage {
//   private wrapper: PlaywrightWrapper;

//   // 🔼 Declare locators at the top
//   private usernameInput: Locator;
//   private passwordInput: Locator;
//   private loginButton: Locator;
//   private loginErrorMessage: Locator;

//   constructor(private page: Page) {
//     this.wrapper = new PlaywrightWrapper(page);

//     // Initialize locators
//     this.usernameInput = this.page.locator("//input[@id='mat-input-0']");
//     this.passwordInput = this.page.locator("//input[@id='mat-input-1']");
//     this.loginButton = this.page.locator("(//span[contains(text(),'Login')])[2]");
//     this.loginErrorMessage = this.page.locator("//mat-error[@id='mat-mdc-error-0']");
//   }

//   // 🔽 Define methods below
//   async enterUsername(username: string) {
//     await this.usernameInput.fill(username);
//   }

//   async enterPassword(password: string) {
//     await this.passwordInput.fill(password);
//   }

//   async clickLoginButton() {
//     await this.wrapper.waitAndClick(this.loginButton);
//   }

//   async getLoginFailureMessage(): Promise<string | null> {
//     await this.loginErrorMessage.waitFor({ state: 'visible' });
//     return await this.loginErrorMessage.textContent();
//   }
// }



import { Page, expect } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';

export default class LoginPage {
  private wrapper: PlaywrightWrapper;

  private LoginPageElements = {
    usernameInput: "//input[@id='mat-input-0']",
    passwordInput: "//input[@id='mat-input-1']",
    loginButton: "(//span[contains(text(),'Login')])[2]",
    loginErrorMessage: "//mat-error[@id='mat-mdc-error-0']"
  };

  constructor(private page: Page) {
    this.wrapper = new PlaywrightWrapper(page);
  }

  async enterUsername(username: string) {
    await this.page.fill(this.LoginPageElements.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.LoginPageElements.passwordInput, password);
  }

  async clickLoginButton() {
    await this.wrapper.waitAndClick(this.LoginPageElements.loginButton);
  }

  async getLoginFailureMessage(): Promise<string | null> {
    const errorLocator = this.page.locator(this.LoginPageElements.loginErrorMessage);
    await errorLocator.waitFor({ state: 'visible' });
    return await errorLocator.textContent();
  }
}

