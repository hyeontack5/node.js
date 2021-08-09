// 자바 스크립트의 객체는 중괄호로 생성하고, 객체안에는 속성을 추가할 수 있습니다.
var person = {};

// 객체의 속성에 접근할 때는 "."을 사용하거나 "[]"을 사용할 수 있습니다.
person["name"] = "백엔드 개발자";
person["age"] = 28;
// person.name = "프론트엔드 개발자";
// person.age = 28;

// 객체의 속성에 접근할 때는 "."을 사용하거나 "[]"을 사용할 수 있습니다.
console.log("이름 : " + person.name);
console.log("나이 : " + person["age"]);

// console.dir을 이용하여 객체의 속성을 확인할 수 있습니다.
console.dir(person);