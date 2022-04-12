# Configuration

The base properties used by Delta are set through the `.env` file.  
This includes values like the application title, and contact email. These values are then used throughout the app.

The `.env` file contains a list of all available variables and comments explaining what they are used for.

## delta.config.js

The `delta.config.js` file is an additional configuration file for delta.  
It is through this file that you specify how the Delta content can be found.

This is done by giving a glob path to each one of the [content types](./CONTENT.md) (Thematic areas, Datasets, Discoveries).  
The default configuration is:
```js
thematics: './thematic/*.thematic.mdx'
datasets: './datasets/*.data.mdx'
discoveries: './discoveries/*.discoveries.mdx'
```