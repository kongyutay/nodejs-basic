const http = require("http");
const fs = require("fs");
const path = require("path");

let mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

const server = http.createServer((request, response) => {
    // 根据请求路径返回响应结果
    //获取请求url的路径
    let {pathname} = new URL(request.url, 'http://127.0.0.1');
    let root = __dirname + '/page';
    let filePath = root + pathname;
    fs.readFile(filePath, (err, data) => {
        if(err) {
            response.setHeader("content-type", "text/html;charset=utf-8");
            response.statusCode = 500;
            response.end("文件读取失败");
            return;
        }

        //获取文件后缀名
        let ext = path.extname(filePath).slice(1);
        //获取对应的累心
        let type = mimes[ext];
        if(type) {
            response.setHeader('content-type', type + ";charset=utf-8");
        } else {
            response.setHeader('content-type', 'application/octet-stream');
        }
        response.end(data);
    });
});

server.listen(9000, () => {
    console.log('服务已经启动');
})