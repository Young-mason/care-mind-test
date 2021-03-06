## intro

편의를 위해 모든 과제를 한 프로젝트 위에서 진행하였습니다

실행방법 : 
```client: npm run start```
```server: npm run server```


## 1-1 

반응형 구현 : width 756px 에서 
전환됩니다

파일 : app.css

## 1-2

메인 상단 
버튼으로 폰트 크기를 
조절할 수 있습니다

파일 : Fontsizer.js

## 2-1

유저 이름을 props로 받아서 메세지를 동적으로 변화시킵니다

파일 : Greet.js


## 2-2

메인 하단에 Pie chart를 구현하였습니다
서버에 js파일로 저장된 데이터를 받아와서 처리해줍니다
data.js파일에 데이터 부분을 수정하면 해당 데이터를 참조해서 차트가 변화합니다

파일 : [client] GoogleChart.js / [server] app.js, data.js

## 2-3

id: test, password: 1234 로 로그인하시면, 
유저 정보를 가져와서 메인화면에 welcome message를 띄워줍니다
jwt가 로컬스토리지에 존재하지 않을경우 로그인 버튼이 활성화되고, 존재한다면 로그아웃 버튼이 활성화됩니다
리덕스를 구현한 파일들은 state폴더 안에 저장되어있습니다


파일: [client] Login.js, state폴더  / [server] app.js, data.js



