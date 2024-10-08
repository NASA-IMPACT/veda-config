import { Locator, Page, test } from '@playwright/test';

type HeaderLinkName = "stories" | "topics" | "dataToolkit" | "news" | "about" | "contact"

export default class HeaderComponent {
  readonly page: Page;
  readonly navigation: Locator;
  readonly storiesLink: Locator;
  readonly topicsLink: Locator;
  readonly dataToolkitLink: Locator;
  readonly newsLink: Locator;
  readonly aboutLink: Locator;
  readonly contactButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigation = this.page.getByLabel('Global Navigation');
    this.storiesLink = this.navigation.getByRole('link', { name: /stories/i} );
    this.topicsLink = this.navigation.getByRole('link', { name: /topics/i} );
    this.dataToolkitLink = this.navigation.getByRole('link', { name: /data toolkit/i} );
    this.newsLink = this.navigation.getByRole('link', { name: /news & events/i });
    this.aboutLink = this.navigation.getByRole('link', { name: /about/i} );
    this.contactButton = this.navigation.getByRole('button', { name: /contact us/i} );
  }

  async clickLink(linkName: HeaderLinkName) {
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
        case 'contact':
          await this.contactButton.click();
          break;
        default:
          throw new Error('unknown link referenced in footer test')
      }
    })
  }
}
