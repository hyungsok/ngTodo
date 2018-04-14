// defineProperty
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
let x = {x: 12};
let y = {y: 13, __proto__: x};

let z = {z: 14, get b() {return 2;}, q: {}};
Object.defineProperty(z, "z", {enumerable: false});
Object.defineProperty(z, "w", {value: 3, enumerable: true});
console.log(z);

let m = {};
Object.assign(m, y, z); // Object.assign(target, ...source) source를 targer으로 카피

console.log(m.y);
console.log(m.z);
console.log(m.b);
console.log(m.x);
console.log(m.q == z.q);
console.log(m);