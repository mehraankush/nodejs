const http = require('http');
// file module to deal with files
const fs = require('fs');
const port = 6969;

// localhost ==> 127.0.0.1:port


function handleRequest(req,res){
    console.log(req.url);
     
    // telling browser content type 
    res.writeHead(200,{'content-type': 'text/html'});

    let filePath;

    switch(req.url){
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        default:
            filePath = './404.html';
    }
    
    fs.readFile(filePath,function(err, data){
        if(err){
            console.log(err);
            return res.end('<h1>Error!</h1>')
        }
        return res.end(data);
    })

    // // rendering html page
    //  fs.readFile('./index.html', function(err,data){
    //     if(err){
    //         console.log(err);
    //         return res.end('<h1>Somwthing Went wrong</h1>');
    //     }
    //     return res.end(data);
    //  })

    // rensering the html content
    // res.end("<h1>I'm Running Bitch</h1>")
}
const server = http.createServer(handleRequest);

// by deafult it takes first argument as error
server.listen(port,function (err) {
    if(err) {
        console.error(err);
    }
    console.log('Server is up and running at',port);
        
})