# Playwright E2E Testing

The veda-config can be tested end-to-end to by leveraging a suite of Playwright tests located in the veda-ui git submodule. It works by serving a local version of the site using yarn serve and performing UI checks against that locally hosted site. The suite is designed to generate a `playwrightTestData.json` that contains the list of all Catalog and Story names. This is done by parsing the `name` field in the `*.mdx` files of the `/datasets` and `/stories` directories of the config repo.

## Running the test suite

The test suite can be run via the `yarn test:e2e` script. There is a `prtest:e2e` script that will generate a new playwrightTestData.json before beginning the actual playwright test run. This allows for new stories or catalogs to be added without updating the test suite.

## Directory Structure

The end to end tests are organized in the `/e2e` directory. The tests have been written following a [Page Object Model](https://martinfowler.com/bliki/PageObject.html) pattern.
Supporting files within the repo are in the following structure:

## Updating Tests

If the layout of a page changes, then the tests may no longer be able to interact with locators. These locators are defined in the Page Objects defined in `/e2e/pages`. The Playwright framework provides multiple ways to choose elements to interact with.  The recommended ones are defined in the [Playwright documentation](https://playwright.dev/docs/locators#quick-guide).

Any new pages will need to have new page objects created and then imported into the `basePage.ts` file following th format of existing pages.  This allows all tests to reference the page.

## Output

Playwright will generate an html report with test results.  This report will show all tests that were run, and will allow a user to view the results of any failed tests. This report can be viewed with the script `yarn report` from the config repo.
