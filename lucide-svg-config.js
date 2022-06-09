const lucide = require('lucide');

module.exports = (eleventyConfig, attributes = {}) => {

    const defaultAttributes = {
        "class": "lucide lucide-x",
        "xmlns": "http://www.w3.org/2000/svg",
        "width": 24,
        "height": 24,
        "viewBox": "0 0 24 24",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
    }

    const globalAttributes = { ...defaultAttributes, ...attributes };

    eleventyConfig.addShortcode("lucide", (iconName, attributes = {}) => {
        if (!iconName) {
            throw new Error(
                "[eleventy-lucideicons] the iconName must be specified"
            );
        }

        attributes = { ...globalAttributes, ...attributes };

        return lucide.icons[iconName].toSvg(attributes)
    });
};