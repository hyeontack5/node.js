var users = [{name : "백엔드 개발자", age : 27}, {name : "프론트엔드 개발자", age : 20}];
console.log("배열 원소의 개수 : " + users.length);

users.push({name : "앱 개발자", age : 21});
console.log("배열 원소의 개수 : " + users.length);

var elem = users.pop();
console.log("배열 원소의 개수 : " + users.length);

console.log("pop으로 꺼낸 세번째 원소");
console.dir(elem);
