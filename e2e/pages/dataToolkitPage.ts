import { Locator, Page } from '@playwright/test';

export default class DataToolkitPage {
  readonly page: Page;
  readonly mainContent: Locator;
  readonly header: Locator;


  constructor(page: Page) {
    this.page = page;
    this.mainContent = this.page.getByRole('main');
    this.header = this.mainContent.getByRole('heading', {level: 1, name: /accessing and exploring data/i })
  }
}
