# Delta config

This repo contains all the content and configuration needed to setup your own instance of [delta-ui](https://github.com/NASA-IMPACT/delta-ui).

The `delta-config` relies on the `delta-ui` submodule. Use `--recursive` flag when cloning `delta-config`, or initialize the submodules with:
```
git submodule update --init --recursive
```

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

## Configuration

The base properties used by Delta are set through the `.env` file. This includes values like the application title, and contact email. These values are then used throughout the app.

## Content

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
But the content can be stored wherever you'd like.

### Thematic Areas
TODO: info

### Datasets
TODO: info

### Discoveries
TODO: info

# Development
There's not much development to be done in the config repo. The UI part of Delta is stored at [delta-ui](https://github.com/NASA-IMPACT/delta-ui), and connected to the config via a git submodule.

**To avoid breaking changes, the version of `delta-ui` is pinned to a specific commit making use of a [git-submodule](https://www.atlassian.com/git/tutorials/git-submodule).** This allows development to continue without breaking existent instances.
You can see the version running:
```
./.delta/delta --info
```

The commit you may want to pin the `delta-ui` to will depend, but to get the latest changes from the `main` branch you could do:
```
# Go into the submodule
cd .delta/ui

# Update the submodule info
git fetch

# Switch to the branch you want.
# You can also choose a specific tag.
git switch main

# Get the latest changes
git pull

# Get back to the root directory
cd -
```

At this point you will have changed the commit the submodule is pointed to.  
If you run a diff on the submodule `git diff .delta/ui` you'll see that the commit changed.
```diff
diff --git a/.delta/ui b/.delta/ui
index 67c68c4..57d18a1 160000
--- a/.delta/ui
+++ b/.delta/ui
@@ -1 +1 @@
-Subproject commit 67c68c4115283a76fe8f3e0921fcd43ad281077a
+Subproject commit 57d18a12a4c17eaf436e128bd06904cba75f3e4a
```

The only thing left to do is to commit this change like you'd normally do.
