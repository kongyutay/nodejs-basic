const http = require("http");

const server = http.createServer((request, response) => {
    //获取请求行
    console.log(request.method);        //会获得get/post方法，会出现很多次，比如favicon请求也会多一次请求
    console.log(request.url);           //中包含url中的路径与查询字符串：/home?a=100，并不会包含协议和域名
    console.log(request.httpVersion);   //获取http版本号
    //获取请求头
    console.log(request.headers);       //结果是一个对象，包含了所有内容
    console.log(request.headers.host);  //只获得单独信息
    response.end('http');
    //这是为了设置响应体，并结束这个响应
});

server.listen(9000, () => {
    console.log('服务已经启动')
})