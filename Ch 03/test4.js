var person = {};

person.name = "백엔드 개발자";
person["age"]  = 28;
person.add = function(a, b){
  return a + b;
}

console.log("더하기 : " + person.add(20, 20));