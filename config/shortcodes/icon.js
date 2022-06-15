const fs = require('fs');
const path = require('path');

iconShortcode = function(file) {  
  let absFilePath = path.resolve(`assets/images/svg/${file}.svg`) 

  let svgData = fs.readFileSync(absFilePath, function(err, contents) {    
    if (err) {  
      throw new Error(err)  
    }
    return contents  
  });

  return svgData.toString('utf8')  
}


module.exports = iconShortcode;
