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

    //新增第一个是一个对象，第二个是回调函数
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 19.9
    }, (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        //data是插入成功后的文档对象，会自动生成id和版本
        console.log(data)
    })
})

//设置链接失败的回调
mongoose.connection.on('error', () => {
    console.log('链接失败')
})

//设置链接关闭的回调
mongoose.connection.on('close', () => {
    console.log('链接关闭')
})