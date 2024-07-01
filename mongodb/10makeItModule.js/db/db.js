const mongoose = require('mongoose');

//封装成链接数据库的代码
module.exports = (success, error) => {
    mongoose.set('strictQuery', true);
    mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

    mongoose.connection.on('open', () => {
        success()
    })

    //设置链接失败的回调
    mongoose.connection.on('error', () => {
        error()
    })

    //设置链接关闭的回调
    mongoose.connection.on('close', () => {
        console.log('链接关闭')
    })

}