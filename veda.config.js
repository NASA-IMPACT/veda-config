module.exports = {
  /**
   * Glob path for the thematic areas.
   */
  thematics: './thematic/*.thematic.mdx',

  /**
   * Glob path for the datasets.
   */
  datasets: './datasets/*.data.mdx',

  /**
   * Glob path for the discoveries.
   */
  discoveries: './discoveries/*.discoveries.mdx',

  // App component and content overrides.
  // See docs/CONFIGURATION.md for more information.
  pageOverrides: {
    // Content for the root about page. This is the global about page, before
    // entering a thematic area.
    // Type: Content override
    aboutContent: './overrides/about.mdx'
  }
};
