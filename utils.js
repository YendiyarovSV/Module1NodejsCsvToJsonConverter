const fs = require('fs')
const path = require('path')
module.exports = (function() {

  var getCsvFileNameFromCommandLine =  function(defaultCsvFileName){
    if(process.argv.length <= 2)
        return defaultCsvFileName;
    return process.argv[2];
  }
  var getFilePath = function(folderName,fileName, fileExtension){
      return path.join(__dirname, folderName, fileName+fileExtension);
  }
  var writeToFile =  function(data, filePath){
    fs.writeFile(filePath, data, function (error) {
      if (error) return console.error("Error writing json file! Info: " + error)
      console.log('Writing is done.')
    })
  }
  var saveArrayOfObjectsToJson = function(arrayOfObjects, jsonFilePath){
    writeToFile(JSON.stringify(arrayOfObjects),
          jsonFilePath);
  }
  return  {
    getCsvFileNameFromCommandLine:getCsvFileNameFromCommandLine,
    writeToFile:writeToFile,
    getFilePath:getFilePath,
    saveArrayOfObjectsToJson:saveArrayOfObjectsToJson
  }
})();
