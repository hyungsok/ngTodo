function Animal(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function() {
    console.log(this === myCat); // => false
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}
var myCat = new Animal('Cat', 4);

myCat.logInfo();
console.log(myCat);

// "The undefined has undefined legs" 출력
// setTimeout의 매개변수로 전달되었기 때문에 메소드는 객체로부터 분리 되어있고,
// 1초 뒤 함수 실행이 된다. logInfo가 함수로써 실행되기 때문에 여기서의 this는 전역 객체다.
setTimeout(myCat.logInfo, 1000);
