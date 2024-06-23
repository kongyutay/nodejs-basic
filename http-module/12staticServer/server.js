/**
 * 创建一个HTTP服务，端口为9000，满足如下需求
 * GET  /index.html         响应 page/index.html 的文件内容
 * GET  /css/app.css        响应 page/css/app.css 的文件内容
 * GET  /images/logo.png    响应 page/images/logo.png 的文件内容
 */

// 要求：
// 搭建一个http服务，响应一个4行3列的表格，并且要求表格有隔行换色效果哦，且点击单元格能高亮显示

const http = require("http");
const fs = require("fs");

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

        response.end(data);
    });
});

server.listen(9000, () => {
    console.log('服务已经启动');
})