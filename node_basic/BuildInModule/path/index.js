const path = require("node:path");  // node: is optional but it makes clear that it's node build in module

console.log(__dirname) // path of the current directory
console.log(__filename) // file name of the current file

console.log(path.basename(__filename)) // last  file name in the file name path
console.log(path.basename(__dirname)) // last dir name present in the dir path

console.log(path.extname(__filename)) // tell about the name of the extention
console.log(path.extname(__dirname)) 

console.log(path.parse(__filename)) // parse to object
console.log(path.format(path.parse(__filename))) // parse to string

console.log(path.isAbsolute(__filename)) // true
console.log(path.isAbsolute('./data.json')) // false './data.json' is a relative path

console.log(path.join("folder1","folder2","data.json"))  //folder1\folder2\data.json
console.log(path.join("//folder1","folder2","data.json"))
console.log(path.join("/folder1","//folder2","data.json"))
console.log(path.join("folder1","//folder2","../data.json"))

console.log(path.resolve("folder1","folder2","data.json"))  //always return the absolute path
console.log(path.resolve("//folder1","folder2","data.json"))
console.log(path.resolve("/folder1","//folder2","data.json"))
console.log(path.resolve("folder1","//folder2","../data.json"))