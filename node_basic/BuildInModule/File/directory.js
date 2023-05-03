const fs = require('node:fs');
const path = require('node:path');

//* used to make the directory
// fs.mkdirSync('makedirs');

//* checks the file and content which is in the directory
const filePath = path.join(__dirname,'makedirs');
const content = fs.readdirSync(filePath)
console.log('File Content',content)

//* to check the existance of the directory
//* returns the boolean value
const doesExist = fs.existsSync('makedirsnabmfm')
console.log(doesExist)

//* remove the directories
const remdir =  fs.rmdirSync('makedirsdd');
console.log('dir deleted',remdir);