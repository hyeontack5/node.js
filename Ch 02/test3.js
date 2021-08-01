console.log("argv 속성의 파라미터 수 : " + process.argv.length);
console.dir(process.argv);

// 아래와 같은 결과가 출력됩니다. 자바스크립트 파일을 node 실행파일을 사용했을 때,
// 두 개의 파라미터가 사용된다는 것을 알 수 있습니다.
// process도 전형적인 전역객체 입니다.
// argv 속성의 파라미터 수 : 2
// [
//   '/usr/local/Cellar/node/16.5.0/bin/node',
//   '/Users/hyeontackoh/Desktop/nodejs/Ch 02/test3.js'
// ]

process.argv.forEach(function(item, index) {
  console.log(index + " : " + item);
});

// 환경변수를 확인할 수 있습니다.
console.dir(process.env);