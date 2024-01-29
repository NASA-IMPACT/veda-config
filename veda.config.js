module.exports = {
  /**
   * Glob path for the datasets.
   */
  datasets: "./datasets/*.data.mdx",

  /**
   * Glob path for the stories.
   */
  stories: "./stories/*.stories.mdx",

  // App component and content overrides.
  // See docs/CONFIGURATION.md for more information.
  pageOverrides: {
    // Content for the about page.
    // Type: Content override
    aboutContent: "./overrides/about.mdx",
    // Content for the home page.
    // Type: Content override
    homeContent: "./overrides/home/index.mdx",
    // Content for the development page.
    // Type: Content override
    developmentContent: "./overrides/development/index.mdx",

    // Component for the home hero banner.
    homeHero: "./overrides/components/home-hero/index.mdx",

    // Component for the header brand.
    headerBrand: "./overrides/components/header-brand/index.mdx",
    // Component for the footer.
    pageFooter: "./overrides/components/page-footer/index.mdx"
  },

  strings: {
    stories: {
      one: "Data Insights",
      other: "Data Insights",
    },
    storiesBanner:
        "Explore the guided narratives below to learn more about greenhouse gas measurement, changes over time, events and human-related causes and contributions.",
    dataCatalogBanner:
        "This dashboard is for exploring key datasets that provide insight into greenhouse gas sources, sinks, emissions, fluxes, and events.",
    // Temporary Banner Text/URL
    tempBanner:
        "Graduate students and early career post-docs are invited to apply for the Summer School for Inverse Modeling of Greenhouse Gases to be held June 11-21, 2024 in Fort Collins, CO. Applications due 1/31/2024.",
    tempBannerUrl:
        "https://www.cira.colostate.edu/conferences/rmtgw/"
  },

  theme: {
    color: {
      primary: "#082a64",
      link: '#1565EF'
    },
    type: {
      base: {
        color: '#1B2631',
        family: '"Inter", sans-serif',
      },
    },
    button: {
      type: {
        case: "uppercase",
        weight: 500,
      },
    },
  },
};
