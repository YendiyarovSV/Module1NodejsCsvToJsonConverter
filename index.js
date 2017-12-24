const utils = require('./utils.js')
var CsvProcessor = require('./csvprocessor.js');

const csvfolderName = 'RawCsvData';
//this is csv file name to read/ by default its name is customer-data
//if user types another filename in the command line e.g. customer-data2
//it will try to find it in RawCsvData foler and process it
//if user types nothing it will use defualtName = customer-data
var csvfileName  = utils.getCsvFileNameFromCommandLine('customer-data');

//form file location in order to read it
const csvFileLocation = utils.getFilePath(csvfolderName, csvfileName,'.csv')

var myCsvProcessor = new CsvProcessor(csvFileLocation)
myCsvProcessor.on('doneConvertingCsvToJson', function(data){
  utils.saveArrayOfObjectsToJson(data.arrayOfObjects,
    utils.getFilePath(csvfolderName, csvfileName,'.json'));
});
myCsvProcessor.emit('startConversion');
