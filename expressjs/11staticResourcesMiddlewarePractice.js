const express = require('express');
const app = express();

//express.static 可以直接指定静态资源文件
app.use(express.static(__dirname + '/11staticResources'));
//会直接返回index.html

app.listen(3000, () => {
    console.log('Server started, port 3000')
})

//一般上路由负责响应动态资源，比如搜索结果，排行榜等等
//静态资源中间间响应静态资源