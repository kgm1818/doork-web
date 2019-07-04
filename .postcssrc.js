// https://github.com/michael-ciniawsky/postcss-load-config
const autoprefixer = require('autoprefixer')
const pxtorem = require("postcss-pxtorem")
const postcssImport = require('postcss-import')
const postcssUrl = require('postcss-url')

module.exports = ( { file } ) => {
  let rootValue;
  if(file && file.dirname && (file.dirname.indexOf('vant') > -1)){
    rootValue = 37.5;
  }else{
    rootValue = 75;
  }
  return {
    "plugins": [
      postcssImport(),
      postcssUrl(),
      autoprefixer(),
      pxtorem({
        rootValue,
        propList: ['*'],
        mixPixelValue: 2
      })
    ]
  }
}