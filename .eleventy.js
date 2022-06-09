const yaml = require("js-yaml");
const htmlmin = require('html-minifier');
const now = String(Date.now());
const lucideicons = require(".lucide-svg-icons.js");

module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./assets/js/site.js": "./assets/js/site.js",
    "./node_modules/alpinejs/dist/cdn.min.js": './assets/js/alpine.js',
    "./node_modules/hyperscript.org/dist/_hyperscript_w9y.min.js": './assets/js/hyperscript.js',
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/assets/image");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Watch the tailwind css files
  eleventyConfig.addWatchTarget('./assets/css/tailwind.config.js');
  eleventyConfig.addWatchTarget('./assets/css/tailwind.css');

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './assets/css/style.css' });
  
  // Watch the js files for esbuild in scripts.11ty.js
  eleventyConfig.addWatchTarget('./assets/js');

  // Shortcodes
  // Add cache busting with {% version %} time string
  eleventyConfig.addShortcode('version', function () {
    return now
  });

  // Insert Lucide SVG with {% %}
  eleventyConfig.addPlugin(lucideicons, {});

  // Change things based on the envirnoment
  let env = process.env.ELEVENTY_ENV;

  if (env === "prod") {
    eleventyConfig.addPassthroughCopy({ './assets/images/favicon/11up.jpg': './assets/images/11up.jgp'})
  }

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_ENV === "prod" &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }

    return content
  })
  
  // Let Eleventy transform HTML files as liquidjs
  // So that we can use .html instead of .liquid
  // 11ty.js template format also picks up on the esbuild.11ty.js script

  return {
    markdownTemplateEngine: 'liquid',
    templateFormats: ['html', 'liquid', 'md', '11ty.js'],
    dataTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
