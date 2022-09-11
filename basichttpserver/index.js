const http= require('http');
const port = 8000;

function requestHandler(reg,res){
  
    console.log(reg.url);

  res.end('Gotcha!');
}
const server = http.createServer(requestHandler);
//first argument always refers to the  error 
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('server is up and runnung');
});