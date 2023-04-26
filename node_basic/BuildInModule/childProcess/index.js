const cp = require('child_process')

// cp.execSync('calc')
// cp.execSync('start brave https://www.google.com') 
console.log('output '+cp.execSync('node demo.js'))