import { getEventTemporalState } from './component'
function sortByDateDesc(items) {
  return items.sort((a, b) => {
    const dateA = new Date(a.endDate || a.date || a.startDate);
    const dateB = new Date(b.endDate || b.date || b.startDate);
    if (dateA.getTime() === dateB.getTime()) {
      const startA = new Date(a.startDate || a.date);
      const startB = new Date(b.startDate || b.date);
      return startB - startA;
    }
    return dateB - dateA;
  });
}

function sortByDateCustom(items) {
  // Categorize the events
  const { pastEvents, notPastEvents } = items.reduce((acc, item) => {
    const temporalState = getEventTemporalState(item.startDate, item.endDate);
    acc[temporalState === 'Past' ? 'pastEvents' : 'notPastEvents'].push(item);
    return acc;
  }, { pastEvents: [], notPastEvents: [] });

  // Sort upcoming events: first by start date, then by end date descending
  notPastEvents.sort((a, b) => {
    const startDiff = new Date(a.startDate) - new Date(b.startDate);
    return startDiff === 0
      ? new Date(b.endDate) - new Date(a.endDate) // If start dates are the same, sort by end date descending
      : startDiff; // Otherwise, sort by start date ascending
  });

  // Sort past events in descending order by end date
  pastEvents.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));

  // Combine the events: upcoming past events first, then past events
  return [...notPastEvents, ...pastEvents];
}


export const NEWSLETTER_ITEMS = sortByDateDesc([
  {
    name: 'October 2024 - US GHG Center Newsletter',
    asLink : {
      url: 'https://conta.cc/48jqdkT'
    },
    media: {
      src: new URL('./media/news/newsletter-v1.4.jpg', import.meta.url).href,
      alt: 'October 2024'
    },
    description: 'Volume 1.4, October 2024',
    date: '2024-10'
  },
  {
    name: 'May 2024 - US GHG Center Newsletter',
    asLink : {
      url: 'https://conta.cc/4blhTSu'
    },
    media: {
      src: new URL('./media/news/Newsletter_2_Learn_Page_Screenshot.png', import.meta.url).href,
      alt: 'May 2024'
    },
    description: 'Volume 1.2, May 2024',
    date: '2024-05'
  },
  {
    name: 'March 2024 - US GHG Center Newsletter',
    asLink : {
      url: 'https://myemail-api.constantcontact.com/US-GHG-Center-Newsletter.html?soid=1141171816352&aid=TCM2bjPR30g'
    },
    media: {
      src: new URL('./media/news/newsletter.jpg', import.meta.url).href,
      alt: 'March 2024'
    },
    description: 'Volume 1.1, March 2024',
    date: '2024-03'
  },
  {
    name: 'July 2024 - US GHG Center Newsletter',
    asLink : {
      url: 'https://conta.cc/4fxbpCD'
    },
    media: {
      src: new URL('./media/news/newsletter-v1.3.jpg', import.meta.url).href,
      alt: 'July 2024'
    },
    description: 'Volume 1.3, July 2024',
    date: '2024-07'
  }
  
])

export const NEWS_ITEMS = [
  {
    name: 'EPA RFI on Methane Emission Technology',
    asLink : {
      url: 'https://www.regulations.gov/document/EPA-HQ-OAR-2024-0350-0001'
    },
    media: {
      src: new URL('./media/news/epa.png', import.meta.url).href,
      alt: 'EPA RFI'
    },
    description: 'The U.S. Environmental Protection Agency (EPA) is inviting public comment on the potential for expanded use of advanced and emerging technologies for methane emissions quantification in the Agency’s Greenhouse Gas Reporting Program (GHGRP). Responses to the request for information (RFI) are due by November 27, 2024.'
  },
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
    name: 'The US GHG Center at the 2023 AGU Fall Meeting',
    asLink : {
      url: 'https://www.youtube.com/watch?v=8_aFRPqiXGw&feature=youtu.be&ab_channel=NASAVideo'
    },
    media: {
      src: new URL('./media/news/Kavvada_2023_AGU_Hyperwall_Edited.png', import.meta.url).href,
      alt: 'NASA logo'
    },
    description: 'The US GHG Center and beta portal was a new and prominent effort highlighted at the 2023 AGU Fall Meeting in San Francisco, December 11th - 15th. Several presentations and posters featured the Center’s content, design, and functionality.'
  }
]

export const EVENT_ITEMS = sortByDateCustom([
  {
    name: 'New ARSET Training on Methane Observations',
    asLink : {
      url: 'https://appliedsciences.nasa.gov/get-involved/training/english/arset-methane-observations-large-emission-event-detection-and'
    },
    media: {
      src: new URL('./media/events/arset_logo.png', import.meta.url).href,
      alt: 'ARSET Logo'
    },
    description: "Registration for the “Methane Observations for Large Emission Event Detection and Monitoring” training is now available on ARSET, NASA’s remote sensing training platform. The training introduces participants to using data gathered by the Earth surface Mineral dust Source Investigation (EMIT) mission. Training will occur November 19-21, 2024.",
    startDate: '2024-11-19',
    endDate: '2024-11-21'
  },
  {
    name: ' AGU Pre-conference Workshop',
    asLink : {
      url: 'https://agu.confex.com/agu/agu24/meetingapp.cgi/Session/229081'
    },
    media: {
      src: new URL('./media/events/agu_logo.png', import.meta.url).href,
      alt: 'AGU Logo'
    },
    description: "On Sunday, December 8 (1:00 - 4:30PM EST), US GHG Center team members will host a workshop at the 2024 American Geophysical Union annual conference. Join us at Advancing Open Science: Greenhouse Gas Emission Data Analysis using the U.S. Greenhouse Gas Center’s JupyterHub. Early bird registration ends on November 6.",
    startDate: '2024-12-08',
    endDate: '2024-12-08'
  },
  {
    name: 'Join the 2nd Annual Stakeholder Forum; Dec 4-5, 2024',
    asLink : {
      url: 'https://emg-wd.wixsite.com/us-ghg-2024'
    },
    media: {
      src: new URL('./media/events/GHGC_Stakeholder_Forum_Announcement_Image.png', import.meta.url).href,
      alt: 'GHGC Stakeholder Forum Announcement Image'
    },
    description: "This 2-day forum will focus on gathering input from the stakeholder community to inform the Center's priorities and future directions. Join us on Dec 4-5, 2024 in College Park, Maryland!",
    startDate: '2024-12-04',
    endDate: '2024-12-05'
  },
  {
    name: 'Policy Speaker Series: An Overview of the Global Greenhouse Gas Watch (G3W)',
    asLink : {
      url: 'https://carbon.nasa.gov/docs/May%202024%20PSS%20Talk%20Announcement.pdf'
    },
    media: {
      src: new URL('./media/events/GHGC_CMS_Joint_Policy_Speaker_Series_G3W_Webinar.png', import.meta.url).href,
      alt: 'CMS speaker series screenshot'
    },
    description: "The US GHG Center is joining with NASA's Carbon Monitoring System (CMS) Initiative to present a webinar on Wednesday, May 8, 2024 from 12-1PM ET. Gianpaolo Balsamo, director of the World Meteorological Organization (WMO) and G3W leader, will discuss how G3W fills critical information gaps on greenhouse gases via an integrated operational framework. Participants can register for the event virtually through WebEx. Attendees must register.",
    startDate: '2024-05-08',
    endDate: '2024-05-08'
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
    description: 'The US GHG Center is hosting a Summer School for Inverse Modeling of Greenhouse Gases (SSIM-GHG), June 11-21, 2024 at Fort Collins, CO, USA. The goal of the summer school is to present and provide guidance and instruction in state-of-the-art atmospheric data assimilation techniques needed to support current and future GHG observing systems.',
    startDate: '2024-06-11',
    endDate: '2024-06-21'
  },
  {
    name: 'Policy Speaker Series: Implementing the U.S. Greenhouse Gas Center',
    asLink : {
      url: 'https://carbon.nasa.gov/pdfs/Feb%202024%20PSS%20Talk%20Announcement%20.pdf'
    },
    media: {
      src: new URL('./media/events/GHGC_CMS_Joint_Policy_Speaker_Series_v1.png', import.meta.url).href,
      alt: 'CMS speaker series screenshot'
    },
    description: 'The US GHG Center is joining with NASA’s Carbon Monitoring System (CMS) Initiative to present a webinar on Tuesday, February 20, 2024 from 12-1PM ET. Dr. Argyro Kavvada, Dr. Lesley Ott, and Dr. Erin McDuffie will discuss development and implementation for the multi-agency US GHG Center and links to the national GHG strategy. Participants can attend on-site at GSFC in Building 33, conference room H114 or virtually through WebEx. Attendees must register.',
    startDate: '2024-02-21',
    endDate: '2024-02-21'
  },
  {
    name: 'American Meteorological Society (AMS) Annual Meeting',
    asLink : {
      url: 'https://us-ghg-center.github.io/ams-2024-workshop/ghg-center-at-ams-2024.html'
    },
    media: {
      src: new URL('./media/events/AMS24_Logo.png', import.meta.url).href,
      alt: 'AMS 24 logo'
    },
    description: '  Members of the GHG Center team hosted a workshop, town hall, and several presentations at the 2024 AMS Annual Meeting in Baltimore, January 28 – February 1. Workshop participants analyzed and visualized data using open-source tools and datasets. At the town hall and multiple presentations AMS attendees shared feedback and saw demonstrations of the US GHG Center.',
    startDate: '2024-01-28',
    endDate: '2024-02-01'
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
    description: 'NASA Administrator Bill Nelson, U.S. Environmental Protection Agency (EPA) Administrator Michael Regan, and other United States government leaders unveiled the U.S. Greenhouse Gas Center  Monday, Dec. 4 during the 28th annual United Nations Climate Conference (COP28).',
    startDate: '2023-12-04',
    endDate: '2023-12-04'
  },
  {
    name: 'US GHG Center Stakeholder Forum',
    asLink : {
      url: 'https://www.youtube.com/playlist?list=PLiuUQ9asub3RDzYAZ3N7_6wIIgmvDpZq_'
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
])

export const TUTORIAL_ITEMS = [
  {
    name: 'Tour the US GHG Center',
    asLink : {
      url: 'https://youtu.be/6xWdIlWqhBE?si=KEaUug75HvH94aBo'
    },
    media: {
      src: new URL("./media/tutorials/tutorial_intro_video.png", import.meta.url).href,
      alt: ''
    },
    description: 'Learn how to use the US GHG Center portal.',
    startDate: '',
    endDate: ''
  },
  {
    name: 'How to Explore Data',
    asLink : {
      url: 'https://www.youtube.com/watch?v=S2XL5WT9W4g'
    },
    media: {
      src: new URL("./media/tutorials/tutorial_exploration_video.png", import.meta.url).href,
      alt: ''
    },
    description: "Learn how to navigate the Exploration Environment.",
    startDate: '',
    endDate: ''
    
  }
]
