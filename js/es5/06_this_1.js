// 자바스크립트에서 this는 실행문맥에 따라서 그 의미가 각각 다르다.
// 함수 실행:
//    함수 실행에서의 this는 전역 객체다.
//    엄격 모드에서 함수 실행에서의 this는 undefined다.
//    내부 함수에서의 this는 실행문맥에 따라 다르다
// 생성자 실행: 자기 자신
// 메소드 실행
//    this는 메소드 실행에서 메소드를 소유하고 있는 객체
//    주의: 메서드가 객체로부터 분리될때
// 간접 실행: alert.call(undefined, 'Hello World!')

function Person() {
  this.someValue = 2;
  var someValue2 = 3;
}

// 함수를 호출할때 this는 전역변수
// Person 함수를 호출하는 순간에 someValue가 전역객체에 변수로 포함된다.
Person(); //실행결과는? 그 이유는?
console.log(someValue);

// 생성자 함수에서의 this는 자기 자신
// 생성자함수는 구분을 하기위해서 관례적으로 대문자로 시작한다.
// var person = new Person();
// console.log(person);
// console.log(someValue);

