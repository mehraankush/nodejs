const express = require('express');
const app = express();
const port = 6969

app.get("/", (req, res) => {
    res.send(`<h1> i am up and finally working</h1>`)
})

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log('up and unning at port ' , port)
})