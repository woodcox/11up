const fs = require('fs');
const path = require('path');

let listFiles = []
fs.readdirSync(path.resolve('./assets/images/svg/')).forEach(file => {
  if (file.split('.').pop() !== 'svg')
    return;
  listFiles.push(path.resolve('.assets/images/svg/', file))
});

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
    relativeFilePath = `./assets/images/svg/${listFiles}.svg`,
  } = props ?? {};
  try {
    let svgdata = fs.readFileSync(relativeFilePath);
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
