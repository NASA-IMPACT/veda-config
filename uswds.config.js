const path = require('path');

module.exports = {
  sass: {
    includePaths: [
      './node_modules/@uswds/uswds/packages',
      './.veda/ui/node_modules/@uswds/uswds/packages'
    ],
    outputStyle: 'compressed'
  },
  paths: {
    dist: {
      theme: './dist/styles',
      img: './dist/img',
      fonts: './dist/fonts'
    },
    src: {
      projectSass: './styles'
    }
  },
  settings: {
    version: 3
  }
};