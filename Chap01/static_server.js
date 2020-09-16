// node-static 확장 모듈을 이용한 정적 파일 서버 만들기 예제

var static = require('node-static'); // 모듈 불러오기
 
file = new static.Server('./public'); // 정적 파일 경로가 세티왼 file 객체 생성
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        


        file.serve(request, response);
    }).resume();
}).listen(8080);