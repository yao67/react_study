const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
    // post로 전달된 데이터를 담을 변수
    let postData = '';

    // data 이벤트 발생 시 연결
    req.on('data', function (data) {
        postData += data;
    })

    // on 함수로 end 이벤트 발생 시 연결
    req.on('end', function() {
        // end 이벤트 발생 시 on 함수로 end 이벤트를 연결
        let parsedQuery = querystring.parse(postData);
        console.log(parsedQuery);

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('값은: ' + postData);
    })
})

// listen 함수로 서버 실행, 포트 번호 8080
server.listen(8080, function () {
    console.log('Server is running...');
})
