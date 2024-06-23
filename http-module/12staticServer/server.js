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
    if(request.method !== 'GET') {
        response.statusCode = 405;
        response.end('<h1>405 Method Not Allowed</h1>');
        return; //一定要写return，防止以下代码继续执行，写多一个end
    }
    // 根据请求路径返回响应结果
    //获取请求url的路径
    let {pathname} = new URL(request.url, 'http://127.0.0.1');
    let root = __dirname + '/page';
    let filePath = root + pathname;
    fs.readFile(filePath, (err, data) => {
        
        if(err) {
            // 设置字符集
            response.setHeader("content-type", "text/html;charset=utf-8");
            switch(err.code) {
                case 'ENOENT': 
                    response.statusCode = 404;
                    response.end('<h1>404 Not Found</h1>');
                case 'EPERM': 
                    response.statusCode = 403;
                    response.end('<h1>403 Forbidden</h1>');
                default:
                    response.statusCode = 500;
                    response.end('<h1>Internal server error</h1>')
            }
            
            response.statusCode = 500;
            response.end("文件读取失败");
            return;
        }

        //获取文件后缀名
        let ext = path.extname(filePath).slice(1);
        //获取对应的累心
        let type = mimes[ext];
        if(type) {
            if(ext === 'html') {
                response.setHeader('content-type', type + ";charset=utf-8");
            } else {
                response.setHeader('content-type', type);
            }
            
            //为了解决任何中文乱码问题，但是index.html就算不写也不会影响，因为html有meta标签 <meta charset="UTF-8">，但是请求报头的权重更高，如果两边都设置，会根据请求报头进行编码
            //但是css和js其实是默认根据网页的字符集进行编码处理
        } else {
            response.setHeader('content-type', 'application/octet-stream');
        }
        response.end(data);
    });
});

server.listen(9000, () => {
    console.log('服务已经启动');
})