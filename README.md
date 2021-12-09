# Delta config

This repo contains all the content and configuration needed to setup your own instance of [delta-ui](https://github.com/NASA-IMPACT/delta-ui).

## Installation
To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) v16 (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/) Package manager

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

```
nvm install
```

Setup the project
```
./.delta/setup
``` 

## Content & Configuration

Delta is divided into Thematic Areas, Datasets, and Discoveries.
Each piece of content is written in [MDX](https://mdxjs.com/docs/what-is-mdx/#what-is-mdx) with configuration frontmatter between a set of `---`.
A file will look something like:
```
---
id: theme1
name: Thematic area 1 
---

# About theme 1

<WidgetMdx prop='example' />
```

After adding some content we need to tell Delta where to find it using the `delta.config.js` file.  
It assumes the following as defaults:
```
thematics: './thematic/*.thematic.mdx'
datasets: './datasets/*.data.mdx'
discoveries: './discoveries/*.discoveries.mdx'
```
But the content can be stores wherever you'd like.

### Thematic Areas
TODO: info

### Datasets
TODO: info

### Discoveries
TODO: info

# Development
There's not much development to be done in the config repo. The UI part of Delta is stored at [delta-ui](https://github.com/NASA-IMPACT/delta-ui), and connected to the config via a git submodule.

**To avoid breaking changes you'll have to manually update the version of delta-ui your config uses.**
You can see the version running:
```
./.delta/delta --info
```