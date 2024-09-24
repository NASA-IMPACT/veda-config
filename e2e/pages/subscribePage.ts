import { Locator, Page } from '@playwright/test';

export default class SubscribePage {
  readonly page: Page;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = this.page.getByText("Sign up for US GHG Center updates");
  }
}
