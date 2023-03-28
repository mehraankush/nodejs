// fs extends the event module
const fs = require('node:fs');


// buffer has a default size os 64kb
// can manuplate buffer size by highWaterMark
const readContent = fs.createReadStream("./file.txt",{
    encoding:'utf-8',
    highWaterMark:2, // buffer size in bytes
})

const writeContent = fs.createWriteStream("./file2.txt")

readContent.on("data",(chuck)=>{
    console.log(chuck)
    writeContent.write(chuck)
})