import { test as base } from '@playwright/test';
import AboutPage from './aboutPage';
import CatalogPage from './catalogPage';
import DatasetPage from './datasetPage';
import ExplorePage from './explorePage';
import FooterComponent from './footerComponent';
import HeaderComponent from './headerComponent';
import HomePage from './homePage';
import StoryPage from './storyPage';

export const test = base.extend<{
  aboutPage: AboutPage;
  catalogPage: CatalogPage;
  datasetPage: DatasetPage;
  explorePage: ExplorePage;
  footerComponent: FooterComponent;
  headerComponent: HeaderComponent;
  homePage: HomePage;
  storyPage: StoryPage
}> ({
  aboutPage: async ({page}, use) => {
    await use(new AboutPage(page));
  },
  catalogPage: async ({page}, use) => {
    await use(new CatalogPage(page));
  },
  datasetPage: async ({page}, use) => {
    await use(new DatasetPage(page));
  },
  explorePage: async ({page}, use) => {
    await use(new ExplorePage(page));
  },
  footerComponent: async ({page}, use) => {
    await use(new FooterComponent(page));
  },
  headerComponent: async ({page}, use) => {
    await use(new HeaderComponent(page));
  },
  homePage: async ({page}, use) => {
    await use(new HomePage(page));
  },
  storyPage: async ({page}, use) => {
    await use(new StoryPage(page));
  },
});

export const expect = test.expect;