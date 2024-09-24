import { test, expect } from '../pages/basePage';

test('about page should have no javascript errors', async ({
  page,
  aboutPage,
 }) => {
  let pageErrorCalled = false;
  // Log all uncaught errors to the terminal
  page.on('pageerror', exception => {
    console.log(`Uncaught exception: "${exception}"`);
    pageErrorCalled = true;
  });

  await page.goto('/about');
  await expect(aboutPage.aboutParagraph, `learn page should load`).toBeVisible();

  // scroll page to bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  expect(pageErrorCalled, 'no javascript exceptions thrown on page').toBe(false)
});

test('partner links should have url and image', async ({
  page,
  aboutPage,
  footerComponent
 }) => {

  await page.goto('/about');
  await expect(aboutPage.aboutParagraph, `about page should load`).toBeVisible();
  await expect(footerComponent.footer).toBeVisible();

  const partnerLinks = await aboutPage.getAllPartnerLinks();

  for(const partner of partnerLinks) {
      const partnerName = await test.step(' getting alt text', async() => {
        return await partner.locator('img').getAttribute('alt');
      })

    await test.step(`testing that ${partnerName} has an href and image`, async() => {
      const href = await partner.getAttribute('href');
      const target = await partner.getAttribute('target');
      expect(href).not.toBeNull;
      expect(target).toBe('_blank');
      await expect(partner.locator('img')).toBeVisible();
    })
  }
});
