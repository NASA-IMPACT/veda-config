export const NEWS_ITEMS = [
  {
    name: 'US GHG Center announced at COP28',
    asLink : {
      url: 'https://www.nasa.gov/news-release/nasa-partners-launch-us-greenhouse-gas-center-to-share-climate-data/'
    },
    media: {
      src: new URL('./media/news/cop28-uae.jpg', import.meta.url).href,
      alt: 'Cop 28 Logo'
    },
    description: 'Agency partners released the US GHG Center at the 28th annual United Nations Climate Conference (COP28) on December 4, 2023.'
  },
  {
    name: 'New U.S. national strategy for measuring and monitoring GHG emissions',
    asLink : {
      url: 'https://www.whitehouse.gov/omb/briefing-room/2023/11/29/interagency-working-group-releases-national-strategy-enhance-nation-greenhouse-gas-measurement-monitoring-capabilities/'
    },
    media: {
      src: new URL('./media/news/US_GHG_MMIS_report_cover_screenshot.png', import.meta.url).href,
      alt: 'NASA logo'
    },
    description: 'On November 29, 2023, the White House released the [National Strategy](hello) to Advance an Integrated U.S. Greenhouse Gas Measurement, Monitoring, and Information System. This report outlines how federal agencies will collaborate to lead the federal government’s efforts to assess and reduce GHG emissions.'
  },
  {
    name: 'The US GHG Center at the 2023 AGU Fall Meeting',
    asLink : {
      url: 'https://www.youtube.com/watch?v=8_aFRPqiXGw&feature=youtu.be&ab_channel=NASAVideo'
    },
    media: {
      src: new URL('./media/news/Kavvada_2023_AGU_Hyperwall_Edited.png', import.meta.url).href,
      alt: 'NASA logo'
    },
    description: 'The US GHG Center was a new and prominent effort highlighted at the 2023 AGU Fall Meeting in San Francisco, December 11th - 15th. Several presentations and posters featured the Center’s content, design, and functionality.'
  }
]

export const EVENT_ITEMS = [
  {
    name: 'American Meteorological Society (AMS) Annual Meeting',
    asLink : {
      url: 'https://us-ghg-center.github.io/ams-2024-workshop/ghg-center-at-ams-2024.html'
    },
    media: {
      src: new URL('./media/events/AMS24_Logo.png', import.meta.url).href,
      alt: 'AMS 24 logo'
    },
    description: ' Join members of the GHG Center team for several events at the 2024 AMS Annual Meeting in Baltimore, January 28 - February 1.',
    startDate: '2024-01-28',
    endDate: '2024-02-01'
  },
  {
    name: 'US GHG Center Summer School',
    asLink : {
      url: 'https://www.cira.colostate.edu/conferences/rmtgw/'
    },
    media: {
      src: new URL('./media/events/summer-school.png', import.meta.url).href,
      alt: 'Summer school info screenshot'
    },
    description: 'The US GHG Center is hosting a Summer School for Inverse Modeling of Greenhouse Gases (SSIM-GHG), June 11-21, 2024 at Fort Collins, CO, USA. The goal of the workshop is to present and provide guidance and instruction of the state of the art in atmospheric data assimilation techniques needed to support current and future GHG observing systems.',
    startDate: '2024-06-11',
    endDate: '2024-06-21'
  },
  {
    name: 'Launch of the US Greenhouse Gas Center at COP28 (12-4-23)',
    asLink : {
      url: 'https://www.nasa.gov/news-release/nasa-partners-launch-us-greenhouse-gas-center-to-share-climate-data/'
    },
    media: {
      src: new URL('./media/news/cop28-uae.jpg', import.meta.url).href,
      alt: 'COP 23 UAE logo'
    },
    description: 'NASA Administrator Bill Nelson, U.S. Environmental Protection Agency (EPA) Administrator Michael Regan, and other United States government leaders unveiled the U.S. Greenhouse Gas Center.',
    startDate: '2023-12-04',
    endDate: '2023-12-04'
  },
  {
    name: 'US GHG Center Stakeholder Forum',
    asLink : {
      url: 'https://www.youtube.com/watch?v=HCG7lepiGPI'
    },
    media: {
      src: new URL('./media/events/stakeholder-forum.png', import.meta.url).href,
      alt: 'Stakeholder forum slidedeck intro slide'
    },
    description: ' U.S. Greenhouse Gas Center team members presented the beta version of the US GHG Center at the Stakeholder Forum on November 28, 2023 in Washington, D.C. Presenters highlighted the capabilities and scientific potential of the website through demonstrations. Representatives of federal, state, and local governments as well as NGOs, boundary organizations, private organizations, and academia attended the forum.',
    startDate: '2023-11-26',
    endDate: '2023-11-28'
  },
  {
    name: 'Listening Session at the NASA Carbon Monitoring System Science Team Meeting',
    asLink : {
      url: 'https://cce-datasharing.gsfc.nasa.gov/files/conference_presentations/Talk_Combley_92_39.pptx'
    },
    media: {
      src: new URL('./media/events/cms.png', import.meta.url).href,
      alt: 'CMS meeting logo'
    },
    description: 'On September 26, 2023, several US GHG Center team members met with a community of potential users and considered how the site could best serve stakeholders. Meeting participants shared ideas on focus areas and needs for the US GHG Center and also suggested stakeholders who might be interested in a targeted Stakeholder Forum for the US GHG Center (November 2023). In addition, team members explored a potential partnership with NASA CMS stakeholder engagement.',
    startDate: '2023-09-26',
    endDate: '2023-11-26'
  }
]