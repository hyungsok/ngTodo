let set = new Set("안녕하세요!!!");

set.add(12); //add 12

console.log(set.has("!")); //값이 존재하는지 확인
console.log(set.size);

set.delete(12); //12를 삭제

console.log(...set);
console.log(set);

set.clear(); //모든 값을 삭제