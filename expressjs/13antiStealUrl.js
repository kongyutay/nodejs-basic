const express = require('express');
const app = express();

//声明一个中间件
app.use((req, res, next) => {
    //检查请求头的referer是否为127.0.0.1
    let referer = req.get('referer');
    console.log(referer);
    if(referer) {
        let url = new URL(referer);
        let hostname = url.hostname;
        console.log(hostname);
        if(hostname !== '127.0.0.1') {
            res.status(404).send('404 not found');
        }
    }
    next();
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('Server started, port 3000')
})