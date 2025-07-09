// import { expect, Page } from '@playwright/test';
// import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';

// export default class ProductPage {
//   private wrapper: PlaywrightWrapper;

//   constructor(private page: Page) {
//     this.wrapper = new PlaywrightWrapper(page);
//   }

//   async searchProduct(productName: string) {
//     const searchBox = this.page.locator("//input[@type='search']");
//     await searchBox.fill(productName);
//     await searchBox.press('Enter');
//   }

//   async addFirstBookToCart() {
//     const firstAddToCart = this.page.locator("//span[@class='mdc-button__label']").first();
//     await firstAddToCart.click();
//   }

//   async openCart() {
//     const cartIcon = this.page.locator("//mat-icon[contains(text(),'shopping_cart')]").first();
//     await cartIcon.click();
//   }

//   async verifyProductIsInCart() {
//     const cartItem = this.page.locator("//tbody[@role='rowgroup']").first();
//     await expect(cartItem).toBeVisible({ timeout: 3000 });
//   }
// }

import { expect, Page, Locator } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';

export default class ProductPage {
  private wrapper: PlaywrightWrapper;

  constructor(private page: Page) {
    this.wrapper = new PlaywrightWrapper(page);
  }

  // 🔼 Locators grouped here
  private ProductPageElements = {
    searchBox: "//input[@type='search']",
    firstAddToCart: "//span[@class='mdc-button__label']",
    cartIcon: "//mat-icon[contains(text(),'shopping_cart')]",
    cartItem: "//tbody[@role='rowgroup']"
  };

  // 🔽 Methods below

  async searchProduct(productName: string) {
    const search = this.page.locator(this.ProductPageElements.searchBox);
    await search.fill(productName);
    await search.press('Enter');
  }

  async addFirstBookToCart() {
    const addButton = this.page.locator(this.ProductPageElements.firstAddToCart).first();
    await addButton.click();
  }

  async openCart() {
    const cartIcon = this.page.locator(this.ProductPageElements.cartIcon).first();
    await cartIcon.click();
  }

  async verifyProductIsInCart() {
    const item = this.page.locator(this.ProductPageElements.cartItem).first();
    await expect(item).toBeVisible({ timeout: 3000 });
  }
}
