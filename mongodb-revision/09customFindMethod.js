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

    //字段筛选：只读取某些属性，可以增加读取的效率，0是不要的字段，1是要的字段
    SongModel.find().select({_id:0, title:1}).exec((err,data)=>{
        if(err) throw err;
        console.log(data)
        mongoose.connection.close();
    })

    //数据排序，1升序，-1降序
    SongModel.find().sort({hot: 1}).exec(function(err,data){
        if(err) throw err;
        console.log(data)
        mongoose.connection.close();
    })


    //数据截取skip跳过，limit只取多少条，合起来使用就是pagination logic
    SongModel.find().skip(10).limit(10).exec(function(err,data){
        if(err) throw err;
        console.log(data)
        mongoose.connection.close();
    })

    //select 和sort可以一起结合使用.select().sort()
})

mongoose.connection.on('error', () => {
    console.log('链接失败')
})

mongoose.connection.on('close', () => {
    console.log('链接关闭')
})