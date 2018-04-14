// spread 연산자 ...
let array1 = [1, 2];
let array2 = [...array1, ...[3, 4]]; //여러 배열로 펼친다
let array3 = [5];

function myFunction(a, b, c, d, e) {
    console.log(a, b, c, d, e);
}

// apply의 첫번재 인자는 내부 this에서 사용될 객체, 두번째 파라메터는 배열로 넘겨야 한다.
// 이때 펼침 연산자를 사용한다.
//각각 아래 실행 결과는 무엇인가?
myFunction.apply(null, [...array2, ...array3]);

myFunction.call(null, [...array2, ...array3]);
