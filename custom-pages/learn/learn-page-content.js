
export const NEWS_ITEMS = [
  {
    title: 'New features added to the website',
    link : 'https://nasa.gov',
    description: 'The US GHG Center website is always evolving. New data and information is added monthly, and website features and capabilities continue to improve.'

  },
  {
    title: 'Check out the new dataset from NOAA',
    link : 'https://nasa.gov',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel nunc mauris. Integer a lacus nec ligula egestas volutpat ut a purus. Nullam tincidunt ultrices urna, sit amet placerat elit vestibulum dignissim.'

  },
  {
    title: 'Here’s a video guide to logging into the Jupyter Hub',
    link : 'https://nasa.gov',
    description: 'The US GHG Center website is always evolving. New data and information is added monthly, and website features and capabilities continue to improve.'
  }

]


export const EVENT_ITEMS = [
  {
    name: 'Event 1',
    asLink : {
      url: 'https://nasa.gov'
    },
    media: {
      src: new URL('./media/nasa.png', import.meta.url).href,
      alt: 'NASA logo'
    },
    date: 'December 12 2023',
    description: 'The US GHG Center website is always evolving. New data and information is added monthly, and website features and capabilities continue to improve.'
  },
  {
    name: 'Event 2',
    asLink : {
      url: 'https://nasa.gov'
    },
    media: {
      src: new URL('./media/nasa.png', import.meta.url).href,
      alt: 'NASA logo'
    },
    description: 'The US GHG Center website is always evolving. New data and information is added monthly, and website features and capabilities continue to improve.'
  }
]