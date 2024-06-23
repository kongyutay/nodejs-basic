// 要求：
// 搭建一个http服务，响应一个4行3列的表格，并且要求表格有隔行换色效果哦，且点击单元格能高亮显示

const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    // 根据请求路径返回响应结果
    //获取请求url的路径
    let {pathname} = new URL(request.url, 'http://127.0.0.1');
    if(pathname === '/') {
        let html = fs.readFileSync(__dirname + '/11table.html');
        response.end(html); //End 方法可以传递字符串也可以是buffer
    } else if(pathname === '/index.css') {
        let css = fs.readFileSync(__dirname + '/11index.css');
        response.end(css); 
    } else if(pathname === '/index.js') {
        let js = fs.readFileSync(__dirname + '/11index.js');
        response.end(js); 
    } else {
        response.statusCode = 404;
        response.end('404 not found')
    }
    
});

server.listen(9000, () => {
    console.log('服务已经启动');
})