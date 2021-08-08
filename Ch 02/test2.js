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

// console이라는 객체의 log 함수
// console이라는 전역 객체는 nodejs를 실행할 수 있는 자바스크립트 코드에서 언제 어디서든 실행할 수 있습니다.
console.log("자바스크립트 객체입니다. %j", person);

// console이라는 객체의 dir 함수
// 자바스크립트 객체의 속성들을 출력해줍니다.
// 다른 사람이 만들 라이브러리를 가져다 쓰는경우 객체들이 어떤 속성을 가지고 있는지 확인할 때 주로 사용됩니다.
console.dir(person);

// console이라는 객체의 time 함수
// console.time(key_value) ~ console.timeEnd(key_value)를 통해서 지정한 구역의 걸린 시간을 체크해줍니다.
console.time('duration_time');

var result = 0;
for (var i = 0; i < 10000; i++) {
  result += i;
}

console.timeEnd('duration_time');

// __filename은 파일의 path(경로)를 알려줍니다. 
// __dirname은 파일이 위치한 directory path(경로)를 알려줍니다.
// __filename 과 __dirname은 전역 변수입니다.
console.log("파일 이름 : %s", __filename);
console.log("패스 : %s", __dirname);