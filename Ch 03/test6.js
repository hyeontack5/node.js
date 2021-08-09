// names라는 배열에 문자열을 요소를 할당한 경우
var names = ["백엔드 개발자", "프론트엔드 개발자", "앱 개발자"];

// users라는 배열에 객체 요소를 할당한 경우
var users = [{name : "백엔드 개발자", age : 28}, {name : "프론트엔드 개발자", age : 20}];

// 배열에 객체를 추가하기 위해서 "push" method를 사용합니다.
users.push({name : "앱 개발자", age : 21});

// "length"를 통해서 배열의 요소의 수를 출력해줍니다.
console.log("사용자 수 : " + users.length);

console.log("첫 번째 사용자 이름 : " + users[0].name);