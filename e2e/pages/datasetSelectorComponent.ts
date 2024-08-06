import { Locator, Page, test } from '@playwright/test';

export default class DatasetSelectorComponent {
  readonly page: Page;
  readonly article: Locator;
  readonly addToMapButton: Locator;
  readonly noDatasetMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.article = this.page.getByRole('article');
    this.addToMapButton = this.page.getByRole('button', {name: /add to map/i });
    this.noDatasetMessage = this.page.getByText(/There are no datasets to show with the selected filters./i);
  }

  async addFirstDataset() {
    await test.step('add first dataset to map', async() => {
      await this.article.first().click();
      await this.addToMapButton.click();
    })
  }
}