// 함수 스코프
// 자바스크립트는 변수의 범위를 호출한 함수의 지역 스코프부터 전역변수들이있는 전역 스코프까지 넓혀가며 찾는다.

// 스코프 체인
var name = 'zero';
function outer() {
  console.log('외부', name);
  function inner() {
    console.log('내부', name);
  }
  inner();
}
outer();

// 렉시컬 스코핑 or 정적 스코프:
// 스코프는 함수를 호출할때가 아니라 선언할때 생긴다.

var name1 = 'zero';
function log1() {
  console.log(name1);
}

function wrapper1() {
  name1 = 'nero';
  log1();
}
wrapper1();

// log2가 실행할때는  wrapper2의 이너함수로 실행되지만 현재 렉시컬 스코프는 글로벌 변수 name2를 참고하게 된다.
var name2 = 'zero';
function log2() {
  console.log(name2);
}

function wrapper2() {
  var name2 = 'nero';
  log2();
}
wrapper2();
