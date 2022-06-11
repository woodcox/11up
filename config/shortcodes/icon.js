const fs = require('fs');

const iconShortcode = (props) => {

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
    relativeFilePath = `./assets/images/svg/${file}.svg`,
  } = props ?? {};
  try {
    let svgdata = fs.readFileSync(relativeFilePath);
    let icon = console.log(file);
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
