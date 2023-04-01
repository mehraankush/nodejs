const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req,res)=>{

    res.writeHead(200,{"content-type": "text/html"});
    superHero={
        firstName:"John",
        lastName:"wick",
    }
 const name = "Ankush Mehra"
//    fs.createReadStream("./index.html").pipe(res)
   let html = fs.readFileSync("./index.html","utf-8")
  // updating the index.html
  html = html.replace("{{name}}",name);
  res.end(html)
//   res.end(JSON.stringify(superHero))
})

server.listen(3000,()=>{
    console.log("server is up and running",3000)
})
