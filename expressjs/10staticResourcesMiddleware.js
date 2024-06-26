const express = require('express');
const app = express();

//express.static 可以直接指定静态资源文件
app.use(express.static(__dirname + '/public'));
//如果直接请求127.0.0.1/9000/css/index.css 这行代码可以直接返回css，图片文件也可以

app.get('/home', (req, res) => {
    res.end('hello express')
});

app.listen(3000, () => {
    console.log('Server started, port 3000')
})

//一般上路由负责响应动态资源，比如搜索结果，排行榜等等
//静态资源中间间响应静态资源