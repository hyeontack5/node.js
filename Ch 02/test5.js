// 직접 만든 모듈같은 경우에는 상대 path(경로)를 적어줍니다.
var calc = require("./calc");
console.log("모듈로 분리한 후 - calc.add : " + calc.add(10, 10));