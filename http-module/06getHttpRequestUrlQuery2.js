const http = require("http");

const server = http.createServer((request, response) => {
    //实例化 url 对象
    let url = new URL('http://127.0.0.1:9000/search?a=100&b=200');      //可以选择放一个完整参数
    let url2 = new URL('/search?a=100&b=200', 'http://127.0.0.1:9000'); //也可以选择拆开放两个参数
    let url3 = new URL('/search?a=100&b=200');                          //这样不行会invalid url的报错

    let url4 = new URL(request.url, 'http://canSimplyWrite.com');       //可以随便写域名，只要补全成完整的url就可以操作了，目的只是要它变成一个对象解析查询字符串
    console.log(url4);
    console.log(url4.pathname);
    console.log(url4.searchParams.get('keyword'));
    response.end('url');
});

server.listen(9000, () => {
    console.log('服务已经启动')
})