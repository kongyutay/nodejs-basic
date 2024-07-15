const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

mongoose.connection.once('open', ()=> {
    //创建文档结构对象
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })

    //创建模型对象 - 对文档操作的封装对象，books是集合名称
    let BookModel = mongoose.model('books', BookSchema)

    //新增
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 19.9
    }, (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        console.log(data)
    })
})
mongoose.connection.on('error', ()=> {})
mongoose.connection.on('close', ()=> {})

mongoose.disconnect()