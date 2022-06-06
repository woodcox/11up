const esbuild = require('esbuild')
const compress = require('esbuild-plugin-compress')
const glob = require('glob-all') // to enable * glob pattern in esbuild
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
      entryPoints: glob.sync(['assets/js/*.js']),
      bundle: true,
      minify: isProd,
      outdir: './dist/assets/js',
      sourcemap: !isProd,
      target: isProd ? 'es6' : 'esnext',
      plugins: [
        compress({ 
          outputDir: 'compressed',
          gzip: true,
          brotli: true,
          removeOrigin: false,
        })
      ]
    })
  }
}
