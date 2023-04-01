 const arthmatics = require('./module')

 console.log(arthmatics.add(3,4));
 console.log(arthmatics.multiply(3,4));
 
 function add(a,b){
    return a+b;
 }

 var args = process.argv.slice(2);
 console.log( add(parseInt (args[0]),parseInt(args[1]) ) );
