const http = require("http");

const server = http.createServer((request, response) => {
    //请求/login则返回登陆页面
    //请求/reg则返回登陆页面
    response.setHeader("content-type", "text/html;charset=utf-8");
    let {method} = request;
    let url = new URL(request.url, 'http://127.0.0.1:9000');
    if(method === 'GET' && url.pathname === '/login') {
        response.end('登陆页面');
    } else if(method === 'GET' && url.pathname === '/reg') {
        response.end('注册页面');
    } else {
        response.end('404 not found.')
    }
});

server.listen(9000, () => {
    console.log('服务已经启动')
})