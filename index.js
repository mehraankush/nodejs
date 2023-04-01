const http = require('node:http');

const server = http.createServer((req,res)=>{
    req.writeHead(200,{"content-type": "text/plain"});
    res.end("Hello world!");
});

const PORT= process.env.PORT || 3000;

server.listen(PORT, ()=>console.log("Server is running on port",POST));
