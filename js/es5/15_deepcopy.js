// shallow copy
var obj = { a: 1 };
var copy = obj;
obj.a = 2;
console.log(obj);
console.log(copy);

// deep copy
/*var obj = { a: 1 };
var copy = Object.assign({}, obj);
obj.a = 2;
console.log(obj);
console.log(copy);*/
