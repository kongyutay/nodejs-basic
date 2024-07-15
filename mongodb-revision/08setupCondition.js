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

    //价格小于20 的图书
    BookModel.find({price: {$lt: 20}}, (err, data) => {
        if(err) {
            console.log('读取失败')
        }
        console.log(data)
    })
    //> $gt
    //< $lt
    // >= $gte
    // <= $lte
    // !== $ne

    //曹雪或余华的书
    BookModel.find({$or: [{author: '曹雪'}, {author: '余华'}]}, (err, data) => {
        if(err) {
            console.log('读取失败')
        }
        console.log(data)
    })

    //价格大于30且小于70
    BookModel.find({$and: [{price: {$gt: 30}}, {price: {$lt: 70}}]}, (err, data) => {
        if(err) {
            console.log('读取失败')
        }
        console.log(data)
    })

    //正则匹配可以进行模糊查询，带‘三’的书名
    BookModel.find({ name: /三/ }, (err, data) => {
        if(err) {
            console.log('读取失败')
        }
        console.log(data)
    })
    //变量无法放在以上结构解析

    BookModel.find({ name: new RegExp('三') }, (err, data) => {
        if(err) {
            console.log('读取失败')
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