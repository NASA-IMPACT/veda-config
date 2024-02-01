const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const fg = require('fast-glob');

const catalogPaths = fg.globSync('**/datasets/*.mdx');
const storyPaths = fg.globSync('**/stories/*.mdx');
const catalogNames = [];
const storyNames = [];

for (const catalog of catalogPaths) {
  const catalogData = matter.read(catalog).data;
  catalogNames.push(catalogData['name']);
}

for (const story of storyPaths) {
  const storyData = matter.read(story).data;
  storyNames.push(storyData['name'])
}

const testDataJson = {
  "catalogs": catalogNames,
  "stories": storyNames
}

fs.writeFile(path.join(__dirname, 'playwrightTestData.json'), JSON.stringify(testDataJson), err => {
  if (err) {
    console.error(err);
  } else {
    console.info('new test data file generated')
  }
});