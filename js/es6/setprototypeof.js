// es6 스펙
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
let x = {x: 12};
let y = {y: 13};
Object.setPrototypeOf(y, x);
console.log(y.x); //12
console.log(y.y); //13
console.log(y);