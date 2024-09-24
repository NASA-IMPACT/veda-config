import fs from 'fs';
import { test, expect } from '../pages/basePage';

const visibleCatalogs = JSON.parse(fs.readFileSync('e2e/playwrightTestData.json', 'utf8'))['catalogsVisible'];

test.describe('catalog card routing', () => {
 for (const item of visibleCatalogs) {
  test(`${item} routes from catalog to details page`, async({
    page,
    catalogPage,
    datasetPage,
    notebookConnectModal,
  }) => {
    let pageErrorCalled = false;
    // Log all uncaught errors to the terminal
    page.on('pageerror', exception => {
      console.log(`Uncaught exception: "${exception}"`);
      pageErrorCalled = true;
    });

    await page.goto('/data-catalog');
    await expect(catalogPage.header, `catalog page should load`).toBeVisible();
    await catalogPage.clickCatalogCard(item);

    await expect(datasetPage.header.filter({ hasText: item}), `${item} page should load`).toBeVisible();

    // scroll page to bottom
    await test.step('scroll to bottom of page', async() => {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    });

    expect(pageErrorCalled, 'no javascript exceptions thrown on page').toBe(false)

    await test.step('click access data button', async() => {
      await catalogPage.accessDataButton.click();
    })
    
    await expect(notebookConnectModal.heading, 'modal should be visisble').toBeVisible();
  })
 }

});
