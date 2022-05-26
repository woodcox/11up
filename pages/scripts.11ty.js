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
      entryPoints: ['assets/js'],
      bundle: true,
      minify: isProd,
      outdir: './dist/assets/js/esb.js',
      sourcemap: !isProd,
      target: isProd ? 'es6' : 'esnext'
    })
  }
}

require('esbuild').buildSync({
  entryPoints: ['app.jsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outfile: 'out.js',
})
