let weakmap = new WeakMap();

(function(){
    let o = {n: 1};
    weakmap.set(o, "A");
})();

//키 'o'는 가비지 콜렉션 대상이다

let s = {m: 1};
weakmap.set(s, "B");

console.log(weakmap.get(s));

console.log(...weakmap); //예외 발생

weakmap.delete(s);
weakmap.clear(); //이런 함수는 없으므로 예외 발생

let weakmap_1 = new WeakMap([[{}, 2], [{}, 5]]);   //이 코드는 작동한다
console.log(weakmap_1.size); //undefined