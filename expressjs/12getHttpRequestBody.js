// 如果请求方法是GET /login 显示表单网页
//如果请求方法是POST /login 获取表单中的用户名和密码

const express = reuquire('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();                   //获取中间件函数，解析json格式的请求体
const urlencodedParser = bodyParser.urlencoded({ extended: false })     //解析querystring格式请求体的中间件

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/12form.html');
});

app.post('/login', urlencodedParser, (req, res) => {
    //当有一个post请求进入/login的时候会执行urlencodedParser
    //这个urlencodedParser执行完毕之后会想req这个请求对象身上添加属性，叫做body
    console.log(req.body)
    res.send('获取用户的数据');
});

app.listen(3000, ()=> {
    console.log('服务已经启动')
})