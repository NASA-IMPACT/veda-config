const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const fg = require('fast-glob');

const catalogPaths = fg.globSync('**/datasets/*.mdx');
const storyPaths = fg.globSync('**/stories/*.mdx');
const catalogNames = [];
const catalogNamesHidden = [];
const datasetIds = [];
const datasetIdsHidden = [];
const datasetIdDisableExplore = [];
const storyNames = [];
const storyNamesHidden = [];

for (const catalog of catalogPaths) {
  const catalogData = matter.read(catalog).data;
  catalogNames.push(catalogData['name']);
  datasetIds.push(catalogData['id']);
  if(catalogData['disableExplore'] == true) {
    datasetIdDisableExplore.push(catalogData['id'])
  }
  if(catalogData['isHidden'] == true) {
    catalogNamesHidden.push(catalogData['name'])
    datasetIdsHidden.push(catalogData['id'])
  }
}

const catalogNamesVisible = catalogNames.filter(item => !catalogNamesHidden.includes(item));
const datasetIdsVisible = datasetIds.filter(item => !datasetIdsHidden.includes(item));

for (const story of storyPaths) {
  const storyData = matter.read(story).data;
  storyNames.push(storyData['name']);
  if(storyData['isHidden'] == true) {
    storyNamesHidden.push(storyData['name'])
  }
}
const storyNamesVisible = storyNames.filter(item => !storyNamesHidden.includes(item));

const testDataJson = {
  catalogs: catalogNames,
  catalogsHidden: catalogNamesHidden,
  catalogsVisible: catalogNamesVisible,
  datasetIds: datasetIds,
  datasetsIdsDisabled: datasetIdDisableExplore,
  datasetIdsHidden: datasetIdsHidden,
  datasetIdsVisible: datasetIdsVisible,
  stories: storyNames,
  storiesHidden: storyNamesHidden,
  storiesVisible: storyNamesVisible,
};

fs.writeFile(
  path.join(__dirname, 'playwrightTestData.json'),
  JSON.stringify(testDataJson),
  (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      throw err;
    } else {
      // eslint-disable-next-line no-console
      console.info('new test data file generated');
    }
  }
);
