const fs = require('fs');
const path = require('path');

// let listFiles = []
// fs.readdirSync(path.resolve('./assets/images/svg/')).forEach(file => {
//  if (file.split('.').pop() !== 'svg')
//    return;
//  listFiles.push(path.resolve('./assets/images/svg/', file))
//});



// const getSvgContent = function (file) {
//   let relativeFilePath = './assets/images/svg/'
// };

// const svgFile = fs.readdirSync(path.resolve('./assets/images/svg/'));

// let iconShortcode = function (file) {
//  let svgFilePath = '.assests/images/svg/${file}.svg';
//  let svgData = fs.readFileSync(svgFilePath,
//  function(err, contents) {
//    if (err) return err
//    return contents
//  });                             
                                                                    
//  return svgData.toString('utf8');
//};



iconShortcode = function(file) {  
  let relativeFilePath = path.resolve(`.assets/images/svg/${file}.svg`) 

  let data = fs.readFileSync(relativeFilePath, function(err, contents) {  
    if (err) return err  
    return contents  
  });

  return data.toString('utf8')  
}


module.exports = iconShortcode;
