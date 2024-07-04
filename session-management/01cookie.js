const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser());                                    //往req添加cookie对象
app.get('/set-cookie', (req, res) => {
    res.cookie('cookie1', 'value1')                         //关闭了浏览器直接销毁
    res.cookie('cookie2', 'value2', {maxAge: 60 * 1000})    //关闭浏览器还可以生存1分钟
    res.send('home');
})

app.get('/remove-cookie', (req, res) => {
    res.clearCookie('value1')                               //会把时间设置成1970年过期的，所以浏览器更新会删除
    res.send('删除cookie');
})

app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    res.send('获取cookie');
})

app.listen(3000)