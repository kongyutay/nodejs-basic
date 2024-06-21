//导入http模块
const http = require("http");

//创建服务对象
const server = http.createServer((request, response) => {
    //request 是一个对象，对请求报文的封装对象
    //可以通过这样获得请求报文

    //response也是一个对象，对响应报文的封装对象
    //可以为浏览器设置响应结果
    response.end('Hello HTTP Server');
    //这是为了设置响应体，并结束这个响应
});

// 监听端口启动服务
server.listen(9000, () => {
    console.log('服务已经启动')
})