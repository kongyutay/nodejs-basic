const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

mongoose.connect('http://127.0.0.1:27017/bilibili')

mongoose.connection.once('open', () => {
    const BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean
    })

    const BookModel = mongoose.model('novel', BookSchema)
    //查找一个
    BookModel.findOne({name: '狂飙'}, (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        console.log('data')
    })
    //查找许多
    BookModel.find({name: '狂飙'}, (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        console.log('data')
    })
    //查找所有
    BookModel.find((err, data) => {
        if(err) {
            console.log(err)
            return
        }
        console.log('data')
    })
    //通过id查找
    BookModel.findById('asdf', (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        console.log('data')
    })
})
mongoose.connection.on('error', () => {

})
mongoose.connection.on('close', () => {

})