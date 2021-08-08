console.log("안녕하세요.");

console.log("숫자입니다. %d", 10);

console.log("문자열입니다. %s", "안녕");

// 중괄호를 통해서 객체를 생성할 수 있습니다.
// person이라는 객체 안에는 name, age라는 속성이 있습니다.
// 속성은 "key : value" 형태로 되어있습니다.
var person = {
  name : "백엔드 개발자",
  age : 28
};

// console이라는 전역 객체는 nodejs를 실행할 수 있는 자바스크립트 코드에서 언제 어디서든 실행할 수 있습니다.
console.log("자바스크립트 객체입니다. %j", person);