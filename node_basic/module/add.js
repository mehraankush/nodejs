

function add(a,b){
    return (a+b)
}
module.exports = add;

module.exports.multiply = function(a,b){
    console.log('sexy')
    return a*b
};
module.exports.sub = function(a,b){
    return a-b
};
// const res  = add(5,4)
// console.log(res)