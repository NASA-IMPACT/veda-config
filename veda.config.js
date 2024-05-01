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
    pageFooter: "./overrides/components/page-footer/index.mdx",
    "/learn": "./custom-pages/learn/index.mdx"
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
    // Temporary Banner Text/URL/expiry
    tempBanner:
        "Register for the webinar - An Overview of The Global Greenhouse Gas Watch (G3W) - by Gianpaolo Balsamo, May 8th  at 12 noon ET.",
    tempBannerUrl:
        "https://nasaenterprise.webex.com/webappng/sites/nasaenterprise/meeting/register/dd51c5f23ae94c948b30191151ad6768?ticket=4832534b00000005d9ebe088afb404cf50c741a479faab69f74ebfcbefd909f9d2f44a8072544937&timestamp=1714513723949&RGID=rd916bf09633aa7d4f9fe87eb6ff67fe3",
    tempBannerExpires:
        "2024-05-08T12:00:00-04:00"
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
  
  booleans: {
    'externalLinksInNewTab': true,
  },
};
