const path=require('path')

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.dirname(__filename));

// parse-return as object

console.log(path.parse(__filename));

console.log(path.join(__dirname,"api","script.js"));