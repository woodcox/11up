const fs = require('fs');
const path = require('path');

let listFiles = []
fs.readdirSync(path.resolve('./assets/images/svg/')).forEach(file => {
  if (file.split('.').pop() !== 'svg')
    return;
  listFiles.push(path.resolve('./assets/images/svg/', file))
});



const getSvgContent = function (file) {
  let relativeFilePath = './assets/images/svg/'
};

const svgFile = fs.readdirSync(path.resolve('./assets/images/svg/'));

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
  } = props ?? {};
  try {
    function eleventyConfig(config) {
      let getSvgContent = function (file) {
        let svgFilePath = '.assests/images/svg/${file}.svg';
        let svgData = fs.readFileSync(svgFilePath,
        function(err, contents) {
          if (err) return err
          return contents
        });                             
                                                                    
        return svgData.toSvg({
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
  }
};

module.exports = iconShortcode;
