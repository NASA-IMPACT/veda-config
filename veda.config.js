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
  },

  strings: {
    stories: {
      one: " Data Story",
      other: "Data Stories",
    },
  },
  cookieConsentForm: {
    title: "Cookie Consent",
    copy: "We use cookies to enhance your browsing experience and to help us understand how our website is used. These cookies allow us to collect data on site usage and improve our services based on your interactions. To learn more about it, see our [Privacy Policy](https://www.nasa.gov/privacy/#cookies)",
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
