// 응용과제, 아래 배열 3개의 구성요소를 모두 더해서 55가 출력되게 하시오.
// 최대한 간단하게 하시오.
let array1 = [1,2,3];
let array2 = [4,5];
let array3 = [6,7,8,9,10];

let result = [...array1, ...array2, ...array3].reduce((prev, curr) => {
  console.log(prev, curr);
  return prev+curr;
});
console.log(result);

let result1 = [...array1, ...array2, ...array3];
let sum=0;
result1.forEach(item => sum += item);
console.log(sum);

console.log(result1.reduce((prev, curr) => prev+curr));
