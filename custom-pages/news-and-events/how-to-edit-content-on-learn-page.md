## How to edit content on Learn page

### News Item

1. Open 'news-page-content.js' file in the same directory.
2. Add an item to 'NEWS_ITEMS' by copying already existing items in the array.
3. Place necessary images in `./media/news` folder. (Let's say this image has a file name 'image-name.png')
4. Edit the field as needed. Please follow the pattern like below. 

```
  {
    name: 'News title',
    asLink : {
      url: 'https://link-for-news.com'
    },
    media: {
      src: new URL('./media/news/image-name.png', import.meta.url).href,
      alt: 'Image description'
    },
    description: 'A short paragraph to describe the news'
  }
```

### Event Item

1. Open 'news-page-content.js' file in the same directory.
2. Add an item to 'EVENT_ITEMS' by copying already existing items in the array.
3. Place necessary images in `./media/events` folder. (Let's say this image has a file name 'image-name.png')
4. Edit the field as needed. Please follow the pattern like below. Note that startDate and endDate should follow 'yyyy-mm-dd' format. If it is a oneday event, put the same date for both.

```
  {
    name: 'Event title',
    asLink : {
      url: 'https://link-for-event.com'
    },
    media: {
      src: new URL('./media/events/image-name.png', import.meta.url).href,
      alt: 'Image description'
    },
    description: 'A short paragraph to describe the event',
    startDate: '2024-01-01',
    endDate: '2024-01-02'
  }
```