// 제너레이터 함수
function * count() {
  // 시작부분부터 읽는 녀석
  yield 1;
  yield 2;
  yield 3;
  return 1;
}

generatorObject = count();

// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());

// 리턴문은 필요없다. yield 수 만큼 반복
for(const value of generatorObject) {
  console.log(value);
}
