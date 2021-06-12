// manual approach(create pakage.json in the root directory, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const ld = require("lodash")

const items = [1,[2,3,[4,[5]]]]
const new_items = ld.flattenDeep(items)
console.log(new_items);