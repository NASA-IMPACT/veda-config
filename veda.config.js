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

const defaultGuidance = {
  left: {
    title: 'Official websites use .gov',
    text: 'A **.gov** website belongs to an official government organization in the United States.',
    iconAlt: 'Dot gov icon',
    icon: '/img/icon-dot-gov.svg'
  },
  right: {
    title: 'Secure .gov websites use HTTPS',
    text: "A **lock icon** or **https://** means you've safely connected to the .gov website. Share sensitive information only on official, secure websites.",
    iconAlt: 'HTTPS icon',
    icon: '/img/icon-https.svg'
  }
};

if (config.GOOGLE_FORM) {
  subNavItems = [
    ...subNavItems,
    {
      title: 'Contact us',
      src: config.GOOGLE_FORM,
      type: 'action'
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
        "Read the new story on using EMIT and AVIRIS-3 for monitoring large methane emission events.",
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
  },
  cookieConsentForm: {
    title: 'Cookie Consent',
    copy: 'We use cookies to enhance your browsing experience and to help us understand how our website is used. These cookies allow us to collect data on site usage and improve our services based on your interactions. To learn more about it, see our [Privacy Policy](https://www.nasa.gov/privacy/#cookies)',
    theme: {
      card: {
        sideBarColor: '#082a64',
        textColor: '#1B2631',
        linkColor: '#175074'
      },
      acceptButton: {
        default: { backgroundColor: '#082a64', textColor: 'white' },
        hover: { backgroundColor: '#061A3A', textColor: '#white' }
      },
      declineButton: {
        default: { borderColor: '#082a64', textColor: '#082a64' },
        hover: { borderColor: '#061A3A', textColor: '#2c3e50' }
      },
      iconColor: { default: '#082a64', hover: '#061A3A' }
    }
  },
  banner: {
    headerText: 'An official website of the United States government',
    headerActionText: "Here's how you know",
    ariaLabel: 'Banner for official government website',
    flagImgSrc: '/img/us_flag_small.png',
    flagImgAlt: 'US flag',
    leftGuidance: defaultGuidance.left,
    rightGuidance: defaultGuidance.right,
    className: '',
    defaultIsOpen: false,
    contentId: 'gov-banner-content'
  },
};