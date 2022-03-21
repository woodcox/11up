const yaml = require("js-yaml");
const htmlmin = require('html-minifier');
const now = String(Date.now());

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
    "./pages/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/cdn.min.js": './assets/js/alpine.js',
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./pages/assets/image");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./pages/favicon.ico");

  // Watch the tailwind css files
  eleventyConfig.addWatchTarget('./assets/css/tailwind.config.js');
  eleventyConfig.addWatchTarget('./assets/css/tailwind.css');

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './assets/css/style.css' })

  // Shortcodes
  // Add cache busting with {% version %} time string
  eleventyConfig.addShortcode('version', function () {
    return now
  });

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


  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'pages',
      output: 'dist',
    },
  };
};
