// 실행 컨텍스트
// 실행하면 전역 컨텍스트가 생기고 함수가 실행될때 마다 함수 컨텍스트가 생긴다
// 컨텍스트 안에 변수객체, 스코프 체인, this가 생성
// 컨텍스트 생성후 함수가 실행, 객체안에서 값을 찾고 없으면 스코프 체인을 따라서 올라가면서 찾는다.
// 함수 실행이 마무리되면 해당 컨텍스트는 사라진다. (클로저는 제외)

var name = 'zero'; // (1)변수 선언 (6)변수 대입
function wow(word) { // (2)변수 선언 (3)변수 대입
  console.log(word + ' ' + name); // (11)
}
function say () { // (4)변수 선언 (5)변수 대입
  var name = 'nero'; // (8)
  console.log(name); // (9)
  wow('hello'); // (10)
}
say(); // (7)


/*
'전역 컨텍스트': {
  변수객체: {
    arguments: null,
      variable: ['name', 'wow', 'say'],
  },
  scopeChain: ['전역 변수객체'],
    this: window,
}
'say 컨텍스트': {
  변수객체: {
    arguments: null,
      variable: ['name'], // 초기화 후 [{ name: 'nero' }]가 됨
  },
  scopeChain: ['say 변수객체', '전역 변수객체'],
    this: window,
}
'wow 컨텍스트': {
  변수객체: {
    arguments: [{ word : 'hello' }],
      variable: null,
  },
  scopeChain: ['wow 변수객체', '전역 변수객체'],
    this: window,
}*/
