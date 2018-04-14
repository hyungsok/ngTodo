const fs = require("fs");

console.log("point a");
fs.writeFile("test.txt", "hellow world", (error) => {
  console.log("point b");
  fs.readFile("test.txt", (err, data) => {
    console.log("point c");
    console.log(data.toString());
  });
  console.log("point d");
});
console.log("point e");

// a e b d c
