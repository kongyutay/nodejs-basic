const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.on('open', () => {
    let BookSchema = new mongoose.Schema({
        name: {
            type: String,
            requried: true,  //必填
            unique: true    //独一无二，但是要重建集合才可以看到效果
        },
        author: {
            type: String,
            default: '匿名' //默认值
        },
        style: {
            type: String,
            enum: ['言情', '城市', '志怪']  //必须是这三个值里面
        },
        price: Number
    })

    let BookModel = mongoose.model('books', BookSchema)

    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 19.9
    }, (err, data) => {
        if(err) {
            console.log('插入失败')
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