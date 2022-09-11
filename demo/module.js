//if we remove module it'll still work

exports.add = function(a,b) {
    return a+b;
}
//module is this whole directry
//module.export is object

module.exports.multiply = function(a,b){
    return a*b;
}