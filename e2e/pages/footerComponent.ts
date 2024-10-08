import { Locator, Page, test } from '@playwright/test';

type FooterLinkName = "stories" | "topics" | "dataToolkit" | "about" | "news" | "subscribe"

export default class FooterComponent {
  readonly page: Page;
  readonly footer: Locator;
  readonly storiesLink: Locator;
  readonly topicsLink: Locator;
  readonly dataToolkitLink: Locator;
  readonly aboutLink: Locator;
  readonly newsLink: Locator;
  readonly subscribeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.footer = this.page.locator('footer');
    this.storiesLink = this.footer.getByRole('link', { name: /stories/i} );
    this.topicsLink = this.footer.getByRole('link', { name: /topics/i} );
    this.dataToolkitLink = this.footer.getByRole('link', { name: /data toolkit/i} );
    this.aboutLink = this.footer.getByRole('link', { name: /about/i} );
    this.newsLink = this.footer.getByRole('link', { name: /news & events/i} );
    this.subscribeLink = this.footer.getByRole('link', { name: /subscribe/i} );
  }

  async clickLink(linkName: FooterLinkName) {
    await test.step(`click on ${linkName} link`, async() => {
      switch (linkName) {
        case 'about':
          await this.aboutLink.click();
          break;
        case 'stories':
          await this.storiesLink.click();
          break;
        case 'topics':
          await this.topicsLink.click();
          break;
        case 'dataToolkit':
          await this.dataToolkitLink.click();
          break;
        case 'news':
          await this.newsLink.click();
          break;
        case 'subscribe':
            await this.subscribeLink.click();
            break;
        default:
          throw new Error('unknown link referenced in footer test')
      }
    })
  }
}
