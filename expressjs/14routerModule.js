//需求：/admin /setting 的请求，要求url携带code=521参数，如果没有携带就提示暗号错误

const express = require('express');
const homeRouter = require('./14routes/homeRouter');
const app = express();

app.use(homeRouter);

app.get('/admin', (req, res) => {
    res.send('后台首页');
});

app.get('/setting', (req, res) => {
    res.send('设置页面');
});

app.all('*', (req, res) => {
    res.send('404');
});

app.listen(3000, () => {
    console.log('Server started, port 3000')
})