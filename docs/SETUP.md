# Setup

This repo contains all the content and configuration needed to setup your own instance of [veda-config](https://github.com/NASA-IMPACT/veda-config).

The `veda-config` relies on the `veda-ui` submodule.  
Use `--recursive` flag when cloning `veda-config`, or initialize the submodules with:

```
git submodule update --init --recursive
```

## Requirements

To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) (see version in [.nvmrc](../.nvmrc)) (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/) Package manager

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

## Installation

Install Node + package manager this repo depends on.

```
nvm install
npm -g install yarn
```

Then, setup the project by running the command below.

```
./.veda/setup
```

## Usage

### Config files

Configuration is done using [dot.env](https://parceljs.org/features/node-emulation/#.env-files) files.

These files are used to simplify the configuration of the app and should not contain sensitive information.

Copy the `.env.local-sample` to `.env.local` to add your configuration variables.

```sh
cp .env.local-sample .env.local
```

### Mapbox Token

Get your Mapbox access token from Mapbox Dashboard. Put the key in `.env.local` file.

## Running the app

To preview the app use:

```
./.veda/veda serve
```

This will start the app and make it available at <http://localhost:9000>.

If the application is not working properly or erroring when it starts, try cleaning the cache with `./.veda/veda clean`.  
If the errors persist [open an issue](https://github.com/NASA-IMPACT/veda-config/issues/new) with the problem description.
