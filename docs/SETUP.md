# Setup

This repo contains all the content and configuration needed to setup your own instance of [delta-ui](https://github.com/NASA-IMPACT/delta-ui).

The `delta-config` relies on the `delta-ui` submodule.  
Use `--recursive` flag when cloning `delta-config`, or initialize the submodules with:
```
git submodule update --init --recursive
```

## Requirements
To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) v16 (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/) Package manager

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

## Installation

```
nvm install
```

Setup the project
```
./.delta/setup
```

## Running the app

To preview the app use:
```
yarn serve
```

This will start the app and make it available at http://localhost:9000.

If the application is not working properly or erroring when it starts, try cleaning the cache with `yarn clean`.  
If the errors persist [open an issue](https://github.com/NASA-IMPACT/delta-config/issues/new) with the problem description.
