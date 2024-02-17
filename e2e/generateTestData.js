const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const fg = require('fast-glob');

const catalogPaths = fg.globSync('**/datasets/*.mdx');
const storyPaths = fg.globSync('**/stories/*.mdx');
const catalogNames = [];
const datasetIds = [];
const storyNames = [];

for (const catalog of catalogPaths) {
  const catalogData = matter.read(catalog).data;
  catalogNames.push(catalogData['name']);
  datasetIds.push(catalogData['id']);

}

for (const story of storyPaths) {
  const storyData = matter.read(story).data;
  storyNames.push(storyData['name'])
}

const testDataJson = {
  catalogs: catalogNames,
  datasetIds: datasetIds,
  stories: storyNames
}

fs.writeFile(path.join(__dirname, '../.veda/ui/e2e/playwrightTestData.json'), JSON.stringify(testDataJson), err => {
  if (err) {
    console.error(err);
  } else {
    console.info('new test data file generated')
  }
});