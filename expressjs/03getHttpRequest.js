const express = require('express');
const app = express();

app.get('home', (req, res) => {
    // 原生的操作
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);

    //Expressjs 的操作
    console.log(req.path);
    console.log(req.query);         //查询字符串
    console.log(req.ip);            //获取ip
    console.log(req.get('host'));   //获取请求头
    res.end('hello express');
});

app.listen(3000, () => {
    console.log('Server started, port 3000')
})