const esbuild = require('esbuild')
const isProd = process.env.ELEVENTY_ENV === 'prod' ? true : false

module.exports = class {
  data() {
    return {
      permalink: false,
      eleventyExcludeFromCollections: true
    }
  }

  async render() {
    await esbuild.build({
      entryPoints: ['assets/js/*.js'],
      bundle: true,
      minify: isProd,
      outdir: './dist/assets/js/esb.js',
      sourcemap: !isProd,
      target: isProd ? 'es6' : 'esnext'
    })
  }
}
