var makeClosure = function() {
  var name = 'zero';
  return function () {
    console.log(name);
  }
};
var closure = makeClosure(); // function () { console.log(name); }
closure(); // 'zero';

/*
"전역 컨텍스트": {
  변수객체: {
    arguments: null,
      variable: [{ makeClosure: Function }, 'closure'],
  },
  scopeChain: ['전역 변수객체'],
    this: window,
}
"makeClosure 컨텍스트": {
  변수객체: {
    arguments: null,
      variable: [{ name: 'zero' }],
  },
  scopeChain: ['makeClosure 변수객체', '전역 변수객체'],
    this: window,
}
"closure 컨텍스트":  {
  변수객체: {
    arguments: null,
      variable: null,
      scopeChain: ['closure 변수객체', 'makeClosure 변수객체', '전역 변수객체'],
      this: window,
  }*/
