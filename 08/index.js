import slugify from "slugify";
// import topla from "./my-module.js";
import {sum,hello,hello2} from './my-module.js';
//var slugify = require('slugify')
const title = slugify("Boşluk AAA BBB CCC DDD")
const title2 = slugify("Boşluk AAA BBB CCC DDD","+")
console.log("Hello World!")
console.log(title)
console.log(title2)
console.log(sum(8,7))
console.log(sum(10,44))
hello()
hello2("Yusuf")