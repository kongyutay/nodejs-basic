const http = require("http");

const server = http.createServer((request, response) => {
    //声明一个变量
    let body = '';
    request.on('data', chunk => {
        //绑定data事件，要获取可读流就需要绑定data事件，然后才可以一点点的把它取出来
        //chunk就是每次取出来的一部分，然后一点点的把一部分放入body当中
        body += chunk;
        //chunk本身是一个buffer，用这个方法可能会将buffer转换成数字，所以可以写chunk.toString();

        //绑定end事件
        //如果chunk取完了之后就会触发end事件，把body进行操作
        request.on('end', () =>{
            console.log(body);
            response.end('http');
        })
    })
});

server.listen(9000, () => {
    console.log('服务已经启动')
})

//如果普通测试，getqingqiu的body通常都是空的。可以用form html 发送post请求并带有参数就可以得到请求体