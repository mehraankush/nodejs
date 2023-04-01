const fs = require('node:fs');

const readStream = fs.createReadStream(__filename);
readStream.close();

readStream.on('close', () =>{
    console.log("This is from readables stream close event callback")
});

setImmediate(()=>{console.log("This is from setImmediate event callback")})
setTimeout(()=>{console.log("This is from setTimeout event callback")});
Promise.resolve().then(()=>{console.log("This is from promise")});
process.nextTick(()=>{console.log("This is from nextTime" )});