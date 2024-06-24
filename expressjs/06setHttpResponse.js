const express = require('express');
const app = express();

app.get('/response', (req, res) => {
    // 原生方法的兼容
    res.statusCode = 404;
    res.statusMessage = 'test';
    res.setHeader('xxx', 'yyy');
    res.write('hello express');
    res.end('response');

    // Express 的方法
    res.status(500);
    res.set('aaa', 'bbb');
    res.send('你好');       //设置响应体，这个不会有乱码，因为会自动放
    res.status(500),set('aaa','bbb').send('连贯操作测试');
});

app.listen(3000, () => {
    console.log('Server started, port 3000')
})