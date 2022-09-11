console.log("hello world!");

function add(a,b){
    return a+b;
}

console.log(add(3,4));

console.log(process.argv);

var arg = process.argv.slice(2);
console.log(arg);

console.log("adding two numbers :",add(parseInt(arg[0]),parseInt(arg[1])));