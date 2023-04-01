const http = require('node:http');
const fs = require('node:fs');
const port = 3000;

const server = http.createServer((req,res)=>{
   
    const html = fs.readFileSync("./index.html","utf-8")

        if(req.url === "/"){
            res.writeHead(200,{"content-type": "text/html"});
            res.end("Home Page");
        }else if(req.url === "/about"){
            res.writeHead(200,{"content-type": "text/html"});
            res.end("About Page");
        }
        else{
            res.writeHead(200,{"content-type": "text/html"});
            res.end(html);
        }
})

server.listen(port,()=>{
    console.log("server is up and running at ",port)
})