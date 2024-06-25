import { Locator, Page, test, expect } from '@playwright/test';

export default class DisclaimerComponent {
  readonly page: Page;
  readonly heading: Locator;
  readonly acceptButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = this.page.getByRole('heading', { name: 'Disclaimer' });
    this.acceptButton = this.page.getByRole('button', { name: 'I understand' })
  }

  async acceptDisclaimer() {
  await test.step('accepting disclaimer', async() => {
    await expect(this.heading).toBeVisible();
    await this.acceptButton.click();
  })
  }
}