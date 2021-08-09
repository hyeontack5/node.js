# nodejs
Do it! Node.js

Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다. 

NPM(Node Package Manager)는 오픈소스 라이브러리를 설치하고 관리하는 기능으로 node.js를 설치하면 자동으로 같이 설치됩니다.

즉, 필요한 웬만한 기능은 이미 개발이 돼서 NPM(Node Package Manager)를 통해 쉽게 설치할 수 있습니다. 결론적으로 이미 있는 모듈을 잘 가져다 쓰기만 해도 개발이 매우 편리해집니다.

NPM(Node Package Manager)은 node.js모듈을 모아둔 저장소

### homebrew를 이용한 node 설치 방법
```
$ brew install node
```

* 설치가 완료되었는지 확인

```
$ node -v 
# v16.5.0
$ npm -v
# 7.19.1
```

[npm](https://www.npmjs.com/)

위 링크에 들어가서 모듈을 검색할 수 있습니다.

github repository 페이지를 열어서 제대로 개발이 진행된 모듈인지 확인해야 합니다.

주간 다운로드 수를 보고, 많은 개발자들이 사용하고 있는 모듈인지 확인가능합니다.

npm을 이용한 모듈 설치 방법
```
npm install [모듈 이름] or npm i [모듈 이름]
```