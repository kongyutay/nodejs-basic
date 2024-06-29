const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.on('open', () => {
    console.log('链接成功')
    //将来学了promise就不是写这里了
    //1. 创建文档的结构对象，约束文档的属性和属性的类型，setup结构罢了还没创建
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })

    //2. 根据setup的结构创建模型对象，这个模型对象可以对文档操作的封装对象
    //books是集合名称
    let BookModel = mongoose.model('books', BookSchema)

    //这个方法接受三个参数
    BookModel.updateOne({name:'红楼梦'}, {price: 9.9}, (err, data) => {
        if(err){
            console.log('更新失败')
            return
        }
        console.log(data)
    })

    //批量更新
    BookModel.updateMany({author: '余华'}, {is_hot: true}, (err, data) => {
        if(err) {
            console.log(err)
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