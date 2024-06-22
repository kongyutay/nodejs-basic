const http = require("http");

//导入url模块，用于解析url
const url = require('url');

const server = http.createServer((request, response) => {
    console.log(request.url);
    let res = url.parse(request.url);      //解析url成一个对象
    //url.parse接受两个参数：
    //@param urlString - url string to parse
    //@param parseQueryString - true, false, 如果设置true的话，query属性（url后面的参数）就会变成一个对象
    console.log(res);           //会获得

    //获取路径
    let pathname = res.pathname;
    console.log(pathname);

    //获取字符串
    let query = url.parse(request.url, true)
    let keyword = query.keyword;
    console.log(keyword);
    response.end('url');                    //queyr 属性变了
});

server.listen(9000, () => {
    console.log('服务已经启动')
})