//Task 1: Read CSV and print on console

 
const parse=require('csv-parser')
const fs=require('fs')
const csvData=[];

fs.createReadStream(__dirname + '/data.csv')
.pipe(
    parse({
        delimiter: ','
    })
)
.on('data', function(dataRow){
    csvData.push(dataRow);
})
.on('end',function(){
    console.log(csvData);
});


