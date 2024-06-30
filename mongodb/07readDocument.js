const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.on('open', () => {
    console.log('链接成功')
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })

    let BookModel = mongoose.model('books', BookSchema)

    //读取单挑
    BookModel.findOne({name: '狂飙'}, (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        console.log(data)
    })

    //批量获取
    BookModel.find({author: '余华'}, (err, data) => {
        if(err) {
            console.log('读取失败')
            return
        }
        console.log(data)
    })

    //不加任何条件，获取所有数据
    BookModel.find((err, data) => {
        if(err) {
            console.log('读取失败')
            return
        }
        console.log(data)
    })

    //根据id获取文档
    BookModel.findById('63asdfkjl;kj', (err, data) => {
        if(err) {
            console.log('读取失败')
            return
        }
        console.log(data)
    })
})

mongoose.connection.on('error', () => {
    console.log('链接失败')
})

mongoose.connection.on('close', () => {
    console.log('链接关闭')
})