import { test, expect } from '../pages/basePage';

test.describe('ensure links in footer route to expected page', async () => {
  test('stories link', async({page, footerComponent, storyPage}) => {
    await page.goto('/');
    await expect(footerComponent.footer).toBeVisible()
    await footerComponent.clickLink('stories');
    await expect(storyPage.header).toBeVisible();
    await expect(page).toHaveURL(/\/stories/i);
  })

  test('topics link', async({page, footerComponent, topicsPage}) => {
    await page.goto('/');
    await expect(footerComponent.footer, 'footer should be visible').toBeVisible()
    await footerComponent.clickLink('topics');
    await expect(topicsPage.header).toBeVisible();
    await expect(page).toHaveURL(/\/topics/i);
  })
  
  test('data toolkit link', async({page, footerComponent, dataToolkitPage}) => {
    await page.goto('/');
    await expect(footerComponent.footer, 'footer should be visible').toBeVisible()
    await footerComponent.clickLink('dataToolkit');
    await expect(dataToolkitPage.header).toBeVisible();
    await expect(page).toHaveURL(/\/data-toolkit/i);
  })

  test('about link', async({page, footerComponent, aboutPage}) => {
    await page.goto('/');
    await expect(footerComponent.footer, 'footer should be visible').toBeVisible()
    await footerComponent.clickLink('about');
    await expect(aboutPage.aboutParagraph, 'about paragraph should be visible').toBeVisible();
    await expect(page, 'should navigate to about route').toHaveURL(/\/about/i);
  })


  test('news & events link', async({page, footerComponent, newsPage}) => {
    await page.goto('/');
    await expect(footerComponent.footer, 'footer should be visible').toBeVisible()
    await footerComponent.clickLink('news');
    await expect(newsPage.header, 'news page header should be visibl').toBeVisible();
    await expect(page, 'should route to /news-and-events').toHaveURL(/\/news-and-events/i);
  })

  test('subscribe link', async({page, footerComponent, subscribePage}) => {
    await page.goto('/');
    await expect(footerComponent.footer, 'footer should be visible').toBeVisible()
    await footerComponent.subscribeLink.click();
    await expect(subscribePage.header, 'subscribe header should be visible').toBeVisible();
    await expect(page, 'should navigate to the subscription page').toHaveURL(/\/public\/subscription\/index.html/i);
  })
})
