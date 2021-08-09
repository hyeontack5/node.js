function add(a, b){
  return a + b;
}

var result = add(10, 10);
console.log("더하기 결과 : " + result);

// 변수에 할당하는 변수 이름이 정해졌기 때문에 익명함수로 사용할 수 있습니다.
var add2 = function(a, b){
  return a + b;
}

// add2라는 변수에 함수가 할당되었기 때문에 변수 이름으로 함수처럼 사용할 수 있습니다.
var result = add2(10, 10);
console.log("더하기 결과 : " + result);