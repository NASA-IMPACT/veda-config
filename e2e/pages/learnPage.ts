import { Locator, Page, test, expect } from '@playwright/test';

export default class LearnPage {
  readonly page: Page;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = this.page.getByRole('heading', { level: 1, name: 'Learn' });
  }
}
