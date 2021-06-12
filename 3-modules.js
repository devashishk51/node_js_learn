//commonJS, every file is a module (by default)
//Modules - Encapsulated code (Only Share Minimum)

const names = require("./4-names");
const hello = require("./5-utils"); 
const data = require('./6-alternative-flavour');    
require('./7-mine-grenade')

console.log(data);
hello("devashish");
hello(names.jack);
hello(names.john); 