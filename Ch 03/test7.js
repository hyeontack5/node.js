var users = [{name : "백엔드 개발자", age : 28}, {name : "프론트엔드 개발자", age : 20}];

var oper = function(a, b){
  return a + b;
};

users.push(oper);

// console.dir을 이용하여 배열의 요소를 확인할 수 있습니다.
console.dir(users);
console.log("세번째 배열 요소를 함수로 실행 : " + users[2](10, 10));