/**
 * Created by eastflag on 2016-10-14.
 */
// 1. 아래의 내용을 리터럴 객체로 담는 array list를 생성하시오.
//title	          price	  author	order
//--------------------------------------
//콩쥐팥쥐	      20000	  미상	  1
//흥부놀부	      25000	  미상	  2
//자바의정석	    35000	  정석	  3
//안드로이드정복	15000	  김상형	4
var books = [
  {title: "콩쥐팥쥐", price: 20000, author: "미상", order: 1},
  {title: "흥부놀부", price: 25000, author: "미상", order: 2},
  {title: "자바의정석", price: 35000, author: "정석", order: 3},
  {title: "안드로이드정복", price: 15000, author: "김상형", order: 4},
];

// 2. books의 type은 무엇인가? 자바스크립트의 타입은 몇가지가 있는가?
console.log(typeof books);


//3. 맨 앞쪽에 이것이자바다, 40000, 김상형, 5를 추가하시오 (힌트: unshift)
books.unshift({title: "이것이자바다", price: 40000, author: "김상형", order: 5});
console.log(books);
//4. 맨 앞쪽에 추가한것을 지우시오,
books.shift();
console.log(books);

// 5. 맨 뒷쪽에 추가하시오. (힌트: push)
books.push({title: "이것이자바다", price: 40000, author: "김상형", order: 5});
console.log(books);
// 6. 맨 뒤쪽에 추가한것을 지우시오,
books.pop();
console.log(books);


// 7. 흥부놀부와 자바의정석 사이에 삽입하시오. (힌트: splice)
books.splice(2, 0, {title: "이것이자바다", price: 40000, author: "김상형", order: 5});
console.log(books);
// 8. 방금 삽입한거를 삭제하시오.
books.splice(2, 1);
console.log(books);


// 9. 원본 배열에서 자바의 정석을 찾아서 저자를 남궁성으로 바꾸시오(힌트: forEach)
console.log('9 -------------------------------------------------------------------');
books.forEach(function(item) {
  if(item.title === '자바의정석') {
    item.author = '남궁성';
  }
});
console.log(books);

// 10. 책의 총 비용을 출력하시오
console.log('10 -----------------------------------------------');
var sum = 0;
books.forEach(function (item) {
  sum += item.price;
});
console.log('forEach sum:' + sum);


// 11. 제목앞에 판매순위를 등수를 붙인("콩쥐팥쥐" => "1등 콩쥐팥쥐") 새로운 배열을 생성 하시오.(힌트: map)
// 이때, 기존 배열과 비교시 값이 같은가? 다른가?
console.log('11 -------------------------------------------------------------------');
var newMap = books.map(function (item) {
    item.title = item.order + '등 ' + item.title;
    return item;
});
console.log(newMap);


// 12. 3등안에 있는것만 걸러서 별도의 배열을 만드시오 (힌트: filter)
console.log('12 -------------------------------------------------------------------');
var newFilter = books.filter(function (item) {
  if(item.order <= 3) {
    return true;
  }
});
console.log(newFilter);

/*var a = fruits.pop();
 console.log(a);
 //Mango
 fruits.push("Kiwi");
 console.log(fruits); //
 // [ 'Banana', 'Orange', 'Apple', 'Kiwi' ]

 //shift, unshift test
 var fruits = ["Banana", "Orange", "Apple", "Mango"];
 var b = fruits.shift();
 console.log(b);
 //Banana
 fruits.unshift("Kiwi");
 console.log(fruits);
 //[ 'Kiwi', 'Orange', 'Apple', 'Mango' ]

 //splice test
 var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.splice(2, 1, "Lemon", "Kiwi");
 //2번 인덱스에 1개(Apple)를 지우고 Lemon,과 Kiwi를 삽입한다.
 console.log(fruits);
 //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]

 var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.splice(1, 2);
 //1번 인덱스에 2개(Orange, Apple)를 지운다.
 console.log(fruits);
 //[ 'Banana', 'Mango' ]

 //map test : 배열의 모든 요소에 fullname property를 추가하고 싶다.
 var persons = [
 {firstname : "Malcom", lastname: "Reynolds"},
 {firstname : "Kaylee", lastname: "Frye"},
 {firstname : "Jayne", lastname: "Cobb"}
 ];
 persons.map(function (item, index) {
 item.fullname = item.firstname + " " + item.lastname;
 });
 console.log(persons);*/
/*[ { firstname: 'Malcom',
 lastname: 'Reynolds',
 fullname: 'Malcom Reynolds' },
 { firstname: 'Kaylee',
 lastname: 'Frye',
 fullname: 'Kaylee Frye' },
 { firstname: 'Jayne', lastname: 'Cobb', fullname: 'Jayne Cobb' } ]*/
