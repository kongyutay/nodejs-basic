const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.on('open', () => {
    
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })

    let BookModel = mongoose.model('books', BookSchema)

    BookModel.deleteOne({_id: 'asdf'}, (err, data) => {
        if(err) {
            console.log('删除失败')
            return
        }
        console.log(data)
    })

    BookModel.deleteOne({is_hot: false}, (err, data) => {
        if(err) {
            console.log('删除失败')
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