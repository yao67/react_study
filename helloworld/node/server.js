// 서버 모듈을 사용하기 위한 http 모듈을 http 변수에 담음
const http = require('http');

// http 모듈로 서버 생성(createServer)
const server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end('Hello Node.js');
})

// listen 함수로 서버 실행, 포트 번호 8080
server.listen(8080, function () {
    console.log('Server is running...');
})