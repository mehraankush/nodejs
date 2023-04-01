const crypto = require('node:crypto')
const https = require('node:https')

const start = Date.now();

// that's how we can increase the thread numbers or count
process.env.UV_THREADPOOL_SIZE = 4;
const MAX = 4;
// by default lbuv has 4 threads
// in async version every instruction runs in a seprate thread 
// it will take the thread from { libiv } thread pool
for(let i = 0; i < MAX; i++){
  https
  .request("https://www.google.com",(res)=>{
    res.on("data",()=>{});
    res.on("end",()=>{
         console.log(`Request: ${i+1}`,Date.now()-start);
    });
  })
}
// for(let i = 0; i < MAX; i++){
//     crypto.pbkdf2("password","salt",1000,512,"sha512",()=>{
//         console.log(`Hash ${i+1}`,Date.now()-start)
//     });
// }





// const start = Date.now();
// password based key derivation function two
// use to hash th epassword before storing it 
// crypto.pbkdf2Sync("password","salt",1000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",1000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",1000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",1000,512,"sha512");
// console.log(Date.now()-start);