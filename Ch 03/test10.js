var users = [{name : "백엔드 개발자", age : 27}, {name : "프론트엔드 개발자", age : 20}];
console.log("배열 원소의 개수 : " + users.length);

users.unshift({name : "앱 개발자", age : 21});
console.log("배열 원소의 개수 : " + users.length);

console.dir(users);

var elem = users.shift();
console.log("배열 원소의 개수 : " + users.length);

console.log("pop으로 꺼낸 세번째 원소");
console.dir(elem);
    