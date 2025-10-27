//console.log('Hello, world!');

// 2 const modulo = require('./printName');
const { printName, lastName } = require('./printName');

// 1 modulo.printName('Gabriel');
// 2 modulo.printName(`Gabriel ${modulo.lastName}`);
printName(`Gabriel ${lastName}`);