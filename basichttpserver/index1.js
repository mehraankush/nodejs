const http= require('http');
const port = 8000;
//fs is use to read and write the folder
const fs = require('fs');

function requestHandler(req,res){
  
    console.log(req.url);
    res.writeHeader(200,{'content-type':'text/html'}) ;
    // res.end('<h1>Gotcha! srever running</h1>');
  //return type of responce
  //readFile is asynchronous
  fs.readFile('./index.html',function(err,data){
     if(err){
        console.log('Error :',err);
        return res.end('<h1>Error</h1>');
     }
     return res.end(data);
  });

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