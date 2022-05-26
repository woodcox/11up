const esbuild = require('esbuild')
const isProd = process.env.ELEVENTY_ENV === 'prod'

module.exports = class {
  data() {
    return {
      permalink: false,
      eleventyExcludeFromCollections: true
    }
  }

  async render() {
    await esbuild.build({
      entryPoints: ['../assets/js'],
      bundle: true,
      minify: isProd,
      outdir: './dist/assets/js',
      sourcemap: !isProd,
      target: isProd ? 'es6' : 'esnext'
    })
  }
}
