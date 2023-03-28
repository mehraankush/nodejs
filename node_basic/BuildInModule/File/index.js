
const fs = require('node:fs');
const fsp = require('node:fs/promises');

// READ FILES
// synchronous way to read file data from another file
const fileContent = fs.readFileSync("./file.txt","utf-8");
console.log(fileContent);

//asynchronous way to read the data
const fileco = fs.readFile("./file.txt","utf-8",(err,data)=>{
   if(err){
    console.log(err);
    return ;
   }
  console.log(data);
});

console.log("last statement")

// WRITE INTO FILES 
//synchronous writting
// fs.writeFileSync("greet.txt","Hello world!");

//asynchronous writting
// fs.writeFile("greet.txt"," Hello Ankush!",{flag:"a "},(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Written Succesfully!");
//     }
// });

// async function version
// it's faster then promise and take less time to execute
async function readFiles(){
    try{
        const data = await fs.readFile("./file.txt", "utf8");
        console.log(data);
    }catch(e){
        console.log(e);
    }
        
}

// promise version of file module
fsp.readFile("./file.txt","utf-8",)
  .then((data) => console.log(data)) // if request is resolve successfully 
  .catch((err) => console.log(err)); // if it got an error

  readFiles()