const http = require('node:http');
const port = 3000;

const server =http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{"content-type": "text/plain"});
        res.end("Home page")
    }
    else if(req.url === '/slow'){
        for(var i = 0; i <60000000;i++){} // simulate cpu work
        res.writeHead(200,{"content-type": "text/plain"});
        res.end("Slow page");
    }
});

server.listen(port,()=>{console.log('server is up and running' ,port)});