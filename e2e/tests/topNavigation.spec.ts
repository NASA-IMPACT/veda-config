import exp from 'constants';
import { test, expect } from '../pages/basePage';

test.describe('ensure links in top navigation route to expected page', async () => {
  test('stories link', async({page, headerComponent, storyPage}) => {
    await page.goto('/');
    await expect(headerComponent.navigation, 'header should load').toBeVisible()
    await headerComponent.clickLink('stories');
    await expect(storyPage.header, 'story page header should load').toBeVisible();
    await expect(page, 'should route to /stories').toHaveURL(/\/stories/i);
  })

  test('topics link', async({page, headerComponent, topicsPage}) => {
    await page.goto('/');
    await expect(headerComponent.navigation, 'header should load').toBeVisible()
    await headerComponent.clickLink('topics');
    await expect(topicsPage.header, 'topics page header should load').toBeVisible();
    await expect(page, 'should route to /topics').toHaveURL(/\/topics/i);
  })

  test('data toolkit link', async({page, headerComponent, dataToolkitPage}) => {
    await page.goto('/');
    await expect(headerComponent.navigation, 'header should load').toBeVisible()
    await headerComponent.clickLink('dataToolkit');
    await expect(dataToolkitPage.header, 'data toolkit page header should load').toBeVisible();
    await expect(page, 'should route to /data-toolkit').toHaveURL(/\/data-toolkit/i);
  })
  
  test('news & events link', async({page, headerComponent, newsPage}) => {
    await page.goto('/');
    await expect(headerComponent.navigation, 'header should load').toBeVisible()
    await headerComponent.clickLink('news');
    await expect(newsPage.header, 'news & events page header should be visible').toBeVisible();
    await expect(page, 'should route to /news-and-events').toHaveURL(/\/news-and-events/i);
  })

  test('about link', async({page, headerComponent, aboutPage}) => {
    await page.goto('/');
    await expect(headerComponent.navigation, 'header should load').toBeVisible()
    await headerComponent.clickLink('about')
    await expect(aboutPage.aboutParagraph, 'about paragraph should be visible').toBeVisible();
    await expect(page, 'should route to about page').toHaveURL(/\/about/i);
  })

  test('contact us button', async({page, headerComponent, contactModal}) => {
    await page.goto('/');
    await expect(headerComponent.navigation, 'header should load').toBeVisible()
    await headerComponent.clickLink('contact');
    await expect(contactModal.header, 'contact modal header should be visible').toBeVisible();
    await expect(page.locator('iframe'), 'an iframe should be visible').toBeVisible();
  })
})
