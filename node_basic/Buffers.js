// buffor does not Have Lot of storage so it store the little data 
// and if it full it will overwrite the current data
const buffer = new Buffer.from("Ankush Mehra")

buffer.write('read')

console.log(buffer)
console.log(buffer.toJSON())
console.log(buffer.toString())