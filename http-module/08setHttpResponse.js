const http = require("http");

const server = http.createServer((request, response) => {
    // 设置响应状态码
    response.statusCode = 200;

    //响应状态的描述(很少用，通常会直接和响应状态码一一对应上）
    response.statusMessage = 'test'

    //响应头，接受两个参数
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.setHeader('Server', 'ServerName');                     //用来标识服务端的名字
    response.setHeader('test', 'test2');
    response.setHeader('cookie', ['c1', 'c2'])

    //响应体的设置
    response.write('love');

    //一般上如果用write设置了响应体，就不会用end来设置响应体，直接空参数
    //每一个请求过来之后执行这个回调函数必须要有一个end方法，而且不能有多个
    response.end();
});

server.listen(9000, () => {
    console.log('服务已经启动');
})