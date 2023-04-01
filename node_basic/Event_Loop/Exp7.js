const fs = require('node:fs');




fs.readFile(__filename,()=>{
    console.log("This is file module")
})
process.nextTick(()=>{
    console.log("This is nextTick");
})

Promise.resolve().then(()=>{
    console.log("This is promise ");
})

// exp 8
setImmediate(()=>{
    console.log("This is setImmediate");
})
setTimeout(()=>console.log("this is set  imeout"),0);