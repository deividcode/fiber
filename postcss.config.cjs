// const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');


module.exports = {
  plugins: [
    // purgecss({
    //   content: ['index.html'],
    //   css: ["src/**/*.css"]
    // }),
    autoprefixer(),
    postcssNested()
  ]
}