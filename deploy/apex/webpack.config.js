require('babel-polyfill')
require('babel-register')({
  ignore: function (filename) {
    if (filename.match(/lambda-comments-utils\/src/)) {
      return false
    }
    return filename.match(/node_modules/)
  }
})
module.exports = require('./webpack.config.es6')
