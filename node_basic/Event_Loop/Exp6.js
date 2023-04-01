const fs = require('node:fs');


// Exp 2
// node add the 0+1ms in the executuin stack
setTimeout(()=>console.log("this is set  imeout"),0);

fs.readFile(__filename,()=>{
    console.log("This is file module")
})

// process.nextTick(()=>{
//     console.log("This is nextTick");
// })

// Promise.resolve().then(()=>{
//     console.log("This is promise ");
// })