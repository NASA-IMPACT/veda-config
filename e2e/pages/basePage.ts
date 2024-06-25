import { test as base } from '@playwright/test';
import AboutPage from './aboutPage';
import AnalysisPage from './analysisPage';
import AnalysisResultsPage from './analysisResultsPage';
import CatalogPage from './catalogPage';
import DatasetPage from './datasetPage';
import DatasetSelectorComponent from './datasetSelectorComponent';
import DisclaimerComponent from './disclaimerComponent';
import ExplorePage from './explorePage';
import FooterComponent from './footerComponent';
import HeaderComponent from './headerComponent';
import HomePage from './homePage';
import StoryPage from './storyPage';

export const test = base.extend<{
  aboutPage: AboutPage;
  analysisPage: AnalysisPage;
  analysisResultsPage: AnalysisResultsPage;
  catalogPage: CatalogPage;
  datasetPage: DatasetPage;
  datasetSelectorComponent: DatasetSelectorComponent;
  disclaimerComponent: DisclaimerComponent;
  explorePage: ExplorePage;
  footerComponent: FooterComponent;
  headerComponent: HeaderComponent;
  homePage: HomePage;
  storyPage: StoryPage
}> ({
  aboutPage: async ({page}, use) => {
    await use(new AboutPage(page));
  },
  analysisPage: async ({page}, use) => {
    await use(new AnalysisPage(page));
  },
  analysisResultsPage: async ({page}, use) => {
    await use(new AnalysisResultsPage(page));
  },
  catalogPage: async ({page}, use) => {
    await use(new CatalogPage(page));
  },
  datasetPage: async ({page}, use) => {
    await use(new DatasetPage(page));
  },
  datasetSelectorComponent: async ({page}, use) => {
    await use(new DatasetSelectorComponent(page));
  },
  disclaimerComponent: async ({page}, use) => {
    await use(new DisclaimerComponent(page));
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