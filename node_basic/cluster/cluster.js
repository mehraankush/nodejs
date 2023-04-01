const cluster = require('node:cluster');
const http = require('node:http');
const os = require('node:os');
const port =3000;

// console.log(os.cpus().length); // 8

if(cluster.isMaster){
    console.log(`master cluster ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
}else{
    console.log(`worker cluster ${process.pid} is running`);

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
}