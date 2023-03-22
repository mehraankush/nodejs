const Superman = require('./caching')

// first instance
console.log(Superman)
console.log(Superman.getName()) // Batman
Superman.setName("Flash")
console.log(Superman.getName()) //Flash

// new instance but i will rember that it has been called before so this is display the same output as before 
// it wil not call the new instance of the module
const newSuperman = require('./caching')
console.log(newSuperman) // Flash


// we can resolve that by exporting a class from that module 
const Hero = require('./class')

const hero1 = new Hero("peter")
console.log(hero1.getName()) 
const hero2 = new Hero("Stewe")
console.log(hero2.getName()) 