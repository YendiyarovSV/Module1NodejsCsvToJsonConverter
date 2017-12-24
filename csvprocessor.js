const EventEmitter = require('events')
const csv=require('csvtojson')

class CsvProcessor extends EventEmitter {
  constructor(csvFileLocation){
    super();
    this.csvFileLocation = csvFileLocation;
    this.on('startConversion', ()=>{
      this.processCsvFile(csvFileLocation)
    });
  }
  processCsvFile(csvFileLocation){
    let arrayOfObjects = [];
    csv().fromFile(csvFileLocation)
    .on('json',(jsonObj)=>{
        arrayOfObjects.push(jsonObj);
    })
    .on('done',(error)=>{
        if(error){
          console.log('Csv file processing ends with an error: ' + error);
        }else{
          console.log('Done processing csv file');
          this.emit('doneConvertingCsvToJson', {arrayOfObjects:arrayOfObjects});
      }
    })
    .on('error',(err)=>{
        console.log('Some error just happened: ' + err);
    })
  }

}

module.exports = CsvProcessor
