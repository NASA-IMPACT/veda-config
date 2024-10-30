module.exports = {
  /**
   * Glob path for the datasets.
   */
  datasets: './datasets/*.data.mdx',

  /**
   * Glob path for the stories.
   */
  stories: './stories/*.stories.mdx',

  // App component and content overrides.
  // See docs/CONFIGURATION.md for more information.
  pageOverrides: {
    // Content for the about page.
    // Type: Content override
    aboutContent: './overrides/about.mdx'
  },

  strings: {
    stories: {
      one: ' Data Story',
      other: 'Data Stories'
    }
  },
  cookieConsentForm: {
    title: 'Cookie Consent',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec nibh nec elit condimentum scelerisque sed vel massa. Fusce non massa eu justo rutrum euismod vitae sit amet libero. To learn more about it, see our [Privacy Policy](https://www.nasa.gov/privacy/#cookies)'
  }
};
