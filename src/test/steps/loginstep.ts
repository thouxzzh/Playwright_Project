// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { pageFixture } from '../../hooks/pagefixture';

// Given('User navigates to the application', { timeout: 30000 }, async function () {
//     //await pageFixture.page.goto("https://bookcart.azurewebsites.net/");
//     const baseUrl = process.env.BASEURL;
//     if (!baseUrl) throw new Error("BASEURL is not defined in environment variables");
//     await pageFixture.page.goto(baseUrl, { timeout: 10000 });
// });

// Given('User clicks on the login link', async function () {
//     const loginLink = pageFixture.page.locator("//span[contains(text(),'Login')]").first();
//     await loginLink.click();
// });

// Given('User enters the name as {string}', async function (username) {
//     await pageFixture.page.locator("//input[@id='mat-input-0']").fill(username);
// });

// Given('User enters the password as {string}', async function (password) {
//     await pageFixture.page.locator("//input[@id='mat-input-1']").fill(password);
// });

// When('User clicks on the login button', async function () {
//     const loginButton = pageFixture.page.locator("(//span[contains(text(),'Login')])[2]");
//     await expect(loginButton).toBeVisible({ timeout: 5000 });
//     await loginButton.click();
// });

// // Then('Login should be success', { timeout: 10000 }, async function () {
// //     const username = 'LAKSITHA29';
// //     const locator = pageFixture.page.locator(`//span[contains(text(),'${username}')]`);
// //     await expect(locator).toBeVisible({ timeout: 5000 });
// //     const successText = await locator.textContent();
// //     console.log("Login success:", successText);

// Then('Login should be success', { timeout: 10000 }, async function () {
//     const username = 'LAKSITHA29';
//     const locator = pageFixture.page.locator(`//span[contains(text(),'${username}')]`);
//     await expect(locator).toBeVisible({ timeout: 5000 });

//     const successText = await locator.textContent();
//     console.log("Login success:", successText);

//     // ✅ Winston info log
//     pageFixture.logger.info(`Login successful for user: ${successText}`);
// });


// Then('Login should fail', async function () {
//     const failMsgLocator = pageFixture.page.locator("//mat-error[@id='mat-mdc-error-0']");
//     await expect(failMsgLocator).toBeVisible();
//     const fail_msg = await failMsgLocator.textContent();
//     console.log("Login failed:", fail_msg);
// });




//i did


// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { pageFixture } from '../../hooks/pagefixture';

// import HeaderPage from '../../pages/headerPage';
// import LoginPage from '../../pages/loginPage';

// let headerPage: HeaderPage;
// let loginPage: LoginPage;

// Given('User navigates to the application', { timeout: 30000 }, async function () {
//   headerPage = new HeaderPage(pageFixture.page);
//   loginPage = new LoginPage(pageFixture.page);

//   const baseUrl = process.env.BASEURL;
//   if (!baseUrl) throw new Error("BASEURL is not defined");
//   await pageFixture.page.goto(baseUrl, { timeout: 10000 });
// });

// Given('User clicks on the login link', async function () {
//   await headerPage.clickLoginLink();
// });

// Given('User enters the name as {string}', async function (username) {
//   await loginPage.enterUsername(username);
// });

// Given('User enters the password as {string}', async function (password) {
//   await loginPage.enterPassword(password);
// });

// When('User clicks on the login button', async function () {
//   await loginPage.clickLoginButton();
// });

// Then('Login should be success', { timeout: 10000 }, async function () {
//   const expectedUsername = 'LAKSITHA29';
//   const actualUsername = await headerPage.getLoggedInUsername(expectedUsername);
//   //await expect(actualUsername).toBeVisible();
//   console.log("Login success:", actualUsername);
//   pageFixture.logger.info(`Login successful for user: ${actualUsername}`);
// });

// Then('Login should fail', async function () {
//   const errorMsg = await loginPage.getLoginFailureMessage();
//   //await expect(errorMsg).toBeVisible();
//   console.log("Login failed:", errorMsg);
//   pageFixture.logger.info(`Login failed with message: ${errorMsg}`);
// });






import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';

import HeaderPage from '../../pages/headerPage';
import LoginPage from '../../pages/loginPage';

let headerPage: HeaderPage;
let loginPage: LoginPage;

Given('User navigates to the application', { timeout: 30000 }, async function () {
  headerPage = new HeaderPage(pageFixture.page);
  loginPage = new LoginPage(pageFixture.page);

  const baseUrl = process.env.BASEURL;
  if (!baseUrl) throw new Error("BASEURL is not defined");
  await pageFixture.page.goto(baseUrl, { timeout: 10000 });
});

Given('User clicks on the login link', async function () {
  await headerPage.clickLoginLink();
});

Given('User enters the name as {string}', async function (username: string) {
  await loginPage.enterUsername(username);
});

Given('User enters the password as {string}', async function (password: string) {
  await loginPage.enterPassword(password);
});

When('User clicks on the login button', async function () {
  await loginPage.clickLoginButton();
});

Then('Login should be success', { timeout: 10000 }, async function () {
  const expectedUsername = 'LAKSITHA29';
  const actualUsername = await headerPage.getLoggedInUsername(expectedUsername);

  expect(actualUsername).toContain(expectedUsername);

  console.log("Login success:", actualUsername);
  pageFixture.logger.info(`Login successful for user: ${actualUsername}`);
});

Then('Login should fail', async function () {
  const errorMsg = await loginPage.getLoginFailureMessage();

  expect(errorMsg).not.toBeNull();
  console.log("Login failed:", errorMsg);
  pageFixture.logger.info(`Login failed with message: ${errorMsg}`);
});



