var users = [{namne : "백엔드 개발자", age : 28}, {name : "프론트엔드 개발자", age : 20}, 
{name : "앱 개발자", age : 21}];

// C 스타일 for문 -> 성능이 그렇게 좋지 않다는게 검증되었다.
for (var i = 0; i < users.length; i++) {
  console.log("배열 원소 #" + i + " : " + users[i].name);
}

// C 스타일 for문 보다는 forEach를 이용합니다.
users.forEach(function(elem, index) {
  console.log("배열 원소 #" + index + " : " + elem.name);
});
