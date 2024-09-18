const dotEnvConfig = require('dotenv').config();
const { parsed: config } = dotEnvConfig;

const defaultMenuLinks = [
  {
    title: 'Stories',
    to: '/stories',
    type: 'internalLink'
  },
  {
    title: 'Topics',
    to: '/topics',
    type: 'internalLink'
  },
  {
    title: 'Data Toolkit',
    to: '/data-toolkit',
    type: 'internalLink'
  },
];

let subNavItems = [
  {
    title: 'News & Events',
    to: '/news-and-events',
    type: 'internalLink'
  },
  {
    title: 'About',
    to: '/about',
    type: 'internalLink'
  },
]

if (config.GOOGLE_FORM) {
  subNavItems = [
    ...subNavItems,
    {
      title: 'Contact us',
      src: config.GOOGLE_FORM,
      type: 'modal'
    }
  ];
}

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
    "/news-and-events": "./custom-pages/news-and-events/index.mdx",
    "/data-toolkit": "./custom-pages/data-toolkit/index.mdx",
    "/topics": "./custom-pages/topics/index.mdx",
  },

  strings: {
    stories: {
      one: "Story",
      other: "Stories",
    },
    storiesBanner:
        "Explore the guided narratives below to learn more about greenhouse gas measurement, changes over time, events and human-related causes and contributions.",
    dataCatalogBanner:
        "This dashboard is for exploring key datasets that provide insight into greenhouse gas sources, sinks, emissions, fluxes, and events.",
    // Temporary Banner Text/URL/expiry
    tempBanner:
        "Read the new data insight on using EMIT and AVIRIS-3 for monitoring large methane emission events.",
    tempBannerUrl:
      "stories/emit-and-aviris-3",
    tempBannerExpires:
        "2024-07-03T12:00:00-04:00"
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
  navItems: {
    mainNavItems: defaultMenuLinks,
    subNavItems: subNavItems
  }
};
