// instance 멤버는 typescript에서만 존재. 인스턴스 멤버는 생성자에서 this로 만든다.
// public, protected, private 도 typescript에서만 존재

class Student {
  // fullName;
  constructor(firstName, middleInitial, lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

let user = new Student("Jane", "M.", "User");

console.log(user);
