module.exports = {
  /**
   * Glob path for the datasets.
   */
  datasets: "./datasets/*.data.mdx",

  /**
   * Glob path for the discoveries.
   */
  discoveries: "./discoveries/*.discoveries.mdx",

  /**
   * File path for the taxonomy index file.
   */
  taxonomiesIndex: "./taxonomies.yml",

  // App component and content overrides.
  // See docs/CONFIGURATION.md for more information.
  pageOverrides: {
    // Content for the about page.
    // Type: Content override
    aboutContent: "./overrides/about.mdx",
    // Content for the home page.
    // Type: Content override
    homeContent: './overrides/home.mdx',

    // Component for the header brand.
    headerBrand: "./overrides/components/header-brand/index.mdx",
    // Component for the footer.
    pageFooter: "./overrides/components/page-footer/index.mdx",
  },

  theme: {
    color: {
      primary: "#109356",
    },
  },
};
