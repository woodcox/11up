const fs = require('fs');

const iconShortcode = (props) => {
  let relativeFilePath = `./assets/images/svg/${file}.svg`;
  let svgdata = fs.readFileSync(relativeFilePath);

  const {
    icon,
    className,
    width = 24,
    height = 24,
    stroke = 'currentColor',
    fill = 'none',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props ?? {};
  try {
    return svgdata.icons[icon].toSvg({
      class: className,
      width,
      height,
      stroke,
      fill,
      'stroke-width': strokeWidth,
      'stroke-linecap': strokeLinecap,
      'stroke-linejoin': strokeLinejoin,
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = iconShortcode;
