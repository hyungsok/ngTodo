//es5 디폴트 매개변수 구현방법
function myFunction(x, y, z) {
  // x, y, z가 입력이 없을때 undefined
  // 각각 1,2,3 을 기본값으로 설정하는 3가지 방법
  // 1. 타입 확인
  if (typeof (x) === "undefined") {
    x = 1;
  }
  // 2. 0, undefined, null, 빈값은 모두 false라는 사실을 이용
  if (!y) {
    y = 2;
  }
  // 3. short circit 알고리즘 활용
  z = z || 3;

  console.log(x + y + z);
}


//es6 디폴트 매개변수 구현방법
// function myFunction(x = 1, y = 2, z = 3) {
//   console.log(x + y + z);
// }

// 1. 6출력
myFunction();

// 2.  16 출력
myFunction(6,7);

// 3. 3번째 파라메터룰 넘기는 방법: 4 출력 => 자바스크립트는 오버로딩이 허용이 안된다.
myFunction(undefined, undefined, 1);
