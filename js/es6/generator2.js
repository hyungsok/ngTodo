a = [1,2,3,4,5];

function * reverse(array) {
  for (let i= a.length - 1; i>=0; i--) {
    yield array[i];
  }
}

/*for(const value of a.reverse()) {
  console.log(value);
}*/

for(const value of reverse(a)) {
  console.log(value);
}


function * filter(array, condition) {
  for(const value of array) {
    if (condition(value)) {
      yield value;
    }
  }
}

for(const value of filter(a, x => x > 2)) {
  console.log(value);
}

// 메모리 효율성에서 위, 제너레이터 방식이  좋다.
for(const value of a.filter(x=>x>2)) {
  console.log(value);
}
