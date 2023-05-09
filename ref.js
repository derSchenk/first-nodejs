const {readFileSync, writeFileSync, appendFile} = require("fs");



const first = readFileSync("content/first.txt", "utf-8");
const second = readFileSync("content/second.txt", "utf-8");

console.log(first, second);

writeFileSync("content/newFile.txt", "Hello this is a test file", {flag: 'a'});