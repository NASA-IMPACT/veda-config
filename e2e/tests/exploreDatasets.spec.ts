import fs from 'fs';
import { test, expect } from '../pages/basePage';

const datasetIds = JSON.parse(fs.readFileSync('e2e/playwrightTestData.json', 'utf8')).datasetIds;
const disabledDatasets = JSON.parse(fs.readFileSync('e2e/playwrightTestData.json', 'utf8')).disabledDatasets;

test.describe('explore dataset', () => {
  for (const dataset of datasetIds) {
    test(`${dataset} explore page functions`, async({
      page,
      datasetSelectorComponent,
      disclaimerComponent,
      datasetPage,
    }) => {
      let pageErrorCalled = false;
      // Log all uncaught errors to the terminal to be visible in trace
      page.on('pageerror', exception => {
        console.log(`Uncaught exception: "${JSON.stringify(exception)}"`);
        pageErrorCalled = true;
      });

      await page.goto(`/exploration?search=${dataset}&datasets=%5B%5D`);
      await disclaimerComponent.acceptDisclaimer();

      if(disabledDatasets.includes(dataset)){
        await expect(datasetSelectorComponent.noDatasetMessage).toBeVisible();
      } else {
        const collectionsResponsePromise = page.waitForResponse(response =>
          response.url().includes('collect') && response.status() === 200
        );
        await datasetSelectorComponent.addFirstDataset()

        const mosaicResponse = await collectionsResponsePromise;
        expect(mosaicResponse.ok(), 'mapbox request should be successful').toBeTruthy();

        // scroll page to bottom
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        expect(pageErrorCalled, 'no javascript exceptions thrown on page').toBe(false);
      }
    })
  }
});