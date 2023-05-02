module.exports = {
  /**
   * Glob path for the datasets.
   */
  datasets: './datasets/*.data.mdx',

  /**
   * Glob path for the discoveries.
   */
  discoveries: './discoveries/*.discoveries.mdx',

  /**
   * File path for the taxonomy index file.
   */
  taxonomiesIndex: './taxonomies.yml',

  // App component and content overrides.
  // See docs/CONFIGURATION.md for more information.
  pageOverrides: {
    // Content for the about page.
    // Type: Content override
    aboutContent: './overrides/about.mdx'
  }
};
