// es5에서 arguments는 파라메터를 객체로 받는다. 배열이 아니다.
function myArgs() {
    // arguments는 무엇인가?
    console.log(arguments);

    for(var index in arguments) {
      console.log(arguments[index]);
    }
}

//출력은 무엇인가?
console.log(myArgs(5,3,1));

// 화살표함수에서는 arguments를 사용할수 없다. 그러면 어떻게 만드는가? 나머지 연산자 사용
// var arrowArgs = () => {
//   for(var index in arguments) {
//     console.log(arguments[index]);
//   }
// };

var arrowArgs = (...args) => {
  console.log(args);
  for(var index in args) {
    console.log(args[index]);
  }
};

console.log(arrowArgs(5,3,1));
