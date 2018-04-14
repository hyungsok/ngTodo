const fs = require("fs");

fs.writeFileSync("test.txt", "hellow world");

const content = fs.readFileSync("test.txt").toString();
console.log(content);
