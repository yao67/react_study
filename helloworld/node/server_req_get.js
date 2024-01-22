const http = require('http');

// 요청한 url을 객체로 만들기 위한 url 모듈
const url = require('url');

// 요청한 url에서 쿼리 String을 객체로 만들기 위한 querystring 모듈
const queryString = require('querystring');

const server = http.createServer(function (request, response) {
    console.log('--- START ---');

    // 브라우저에서 요청한 주소 가져오기
    const parseUrl = url.parse(request.url);
    console.log(parseUrl);

    // url에서 쿼리스트링만 분리
    const parsedQuery = queryString.parse(parseUrl.query, '&', '=');
    console.log(parsedQuery);

    console.log('--- END ---');

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Hello Node.js');
})

// listen 함수로 서버 실행, 포트 번호 8080
server.listen(8080, function () {
    console.log('Server is running...');
})