import { Locator, Page } from '@playwright/test';

export default class ExplorePage {
  readonly page: Page;
  readonly exploreDataLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.exploreDataLink = this.page.getByRole('link', { name: /Explore data/i })
  }
}