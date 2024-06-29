const mongoose = require('mongoose');
//默认端口是27017，写不写都可以，bilibili是数据库的名称，如果不存在会自动创建
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//on有绑定事件的意思
//然后是设置链接成功后的回调
mongoose.connection.on('open', () => {
    console.log('链接成功')
})

//设置链接失败的回调
mongoose.connection.on('error', () => {
    console.log('链接失败')
})

//设置链接关闭的回调
mongoose.connection.on('close', () => {
    console.log('链接关闭')
})