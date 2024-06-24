const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

//声明中间件函数
function recordMiddleware(req, res, next){
    //获取url和ip
    let {url, ip} = req;
    //将信息保存在文件中access.log
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}  ${ip}\r\n`);
    next();     //会调用后续的回调函数
}

//调用这个中间件
app.use(recordMiddleware);

app.get('/home', (req, res) => {
    res.send('前台首页');
});

app.get('/admin', (req, res) => {
    res.send('后台首页');
});

app.all('*', (req, res) => {
    res.send('404');
});

app.listen(3000, () => {
    console.log('Server started, port 3000')
})