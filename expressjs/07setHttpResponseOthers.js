const express = require('express');
const app = express();

app.get('/other', (req, res) => {
    // 其他方法
    res.redirect('http://google.com');          //重定向
    res.download(__dirname + './package.json'); //下载响应，传入文件的绝对路径，进入这个url后会直接下载文件，但是还是和响应报文有关系，只是响应头是有attachment，响应体有内容
    res.json({
        "name": "",
        "slogan": ""
    });                                         //响应json
    res.sendFile(__dirname + 'home.html')       //响应文件内容
});

app.listen(3000, () => {
    console.log('Server started, port 3000')
})