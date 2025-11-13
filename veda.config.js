const dataCatalogNavItem = {
  id: "data-catalog",
  title: "Data Catalog",
  to: "/data-catalog",
  type: "internalLink",
};

const explorationNavItem = {
  id: "exploration",
  title: "Exploration Tools",
  type: "dropdown",
  children: [
    {
      id: "time-series-analysis",
      title: "Time-Series Analysis",
      to: "/exploration",
      type: "internalLink",
    },
    {
      id: "fire-evnt-explorer",
      title: "Fire Event Explorer",
      to: "/tools/fire-event-explorer",
      type: "internalLink",
    },
  ],
};

const storiesNavItem = {
  id: "stories",
  title: "Stories",
  to: "/stories",
  type: "internalLink",
};

let headerNavItems = [dataCatalogNavItem, explorationNavItem, storiesNavItem];

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
    "/tools/fire-event-explorer": "./custom-pages/wildfire-explorer/index.mdx",
  },

  strings: {
    stories: {
      one: " Data Story",
      other: "Data Stories",
    },
  },
  navItems: {
    headerNavItems: headerNavItems,
  },
  cookieConsentForm: {
    title: "Cookie Consent",
    copy: "We use cookies to enhance your browsing experience and to help us understand how our website is used. These cookies allow us to collect data on site usage and improve our services based on your interactions. To learn more about it, see our [Privacy Policy](https://www.nasa.gov/privacy/#cookies).",
  },
  siteAlert: {
    content: `Placeholder banner text.`,
    expires: '2025-11-12T12:00:00-04:00',
    type: 'emergency',
    slim: true,
    showIcon: true
  },
};
