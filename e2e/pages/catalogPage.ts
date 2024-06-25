import { Locator, Page } from '@playwright/test';

export default class CatalogPage {
  readonly page: Page;
  readonly mainContent: Locator;
  readonly header: Locator;
  readonly accessDataButton: Locator;
  readonly exploreDataButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.mainContent = this.page.getByRole('main');
    this.header = this.mainContent.getByRole('heading', {level: 1})
    this.accessDataButton = this.page.getByRole('button', {name: /access data/i });
    this.exploreDataButton = this.page.getByRole('button', {name: /explore data/i });
  }
}