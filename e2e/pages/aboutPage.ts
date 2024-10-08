import { Locator, Page, test } from '@playwright/test';

export default class AboutPage {
  readonly page: Page;
  readonly aboutParagraph: Locator;
  readonly partnersSection: Locator;
  readonly partnerLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aboutParagraph = this.page.getByText("The U.S. Greenhouse Gas Center (US GHG Center) is a multi-agency effort");
    this.partnersSection = this.page.locator('div').filter({has: this.page.getByRole('heading', { level: 2, name: /Our Partners/i })});
    this.partnerLink = this.partnersSection.getByRole('link').filter({has: this.page.locator('img')});
  }

  async getAllPartnerLinks() {
    return  await test.step('get all partner links', async() => {
      return this.partnerLink.all();
    })
  }

  async getPartnerName(partner: Locator) {
    console.log(`looking at ${partner}`)
    const partnerText =  await test.step('getting text name for partner', async() => {
      // await partner.scrollIntoViewIfNeeded();
      const partnerText = await partner.innerText();
      console.log(`found ${partnerText}`)
      return partnerText
    })
    console.log(`found ${partnerText} here`)
    return partnerText
  }
}
