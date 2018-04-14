// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// Object.create() 는 새로만든 객체를 반환하되 그 객체의 프로토타입을 정의

//ES5 이전
var x = {x: 12};
var y = Object.create(x, {y: {value: 13}});  // x는 y의 프로토타입
console.log(y.x);
console.log(y.y);
console.log(y);
console.log(y.__proto__);

//ES6 이후
let a = {a: 12, __proto__: {b: 13}};
console.log(a.a);
console.log(a.b);
console.log(a);