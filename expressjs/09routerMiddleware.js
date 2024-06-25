//需求：/admin /setting 的请求，要求url携带code=521参数，如果没有携带就提示暗号错误

const express = require('express');

const app = express();



app.get('/home', (req, res) => {
    res.send('前台首页');
});

//声明中间件
let checkCodeMiddleware = (req, res, next) => {
    //判断url中是否code参数等于521
    if(req.query.code === '521'){
        next();
    } else {
        res.send('暗号错误')
    }
}

app.get('/admin', checkCodeMiddleware, (req, res) => {
    res.send('后台首页');
});

app.get('/setting', checkCodeMiddleware, (req, res) => {
    res.send('设置页面');
});

app.all('*', (req, res) => {
    res.send('404');
});

app.listen(3000, () => {
    console.log('Server started, port 3000')
})