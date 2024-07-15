const mongoose = require('mongooose')
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

mongoose.connection.once('open', () => {
    const BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean
    })

    let BookModel = mongoose.model('novel', BookSchema)
    BookModel.updateOne({name: '红楼梦'}, {price: 9.9}, (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        console.log(data)
    })
    BookModel.updateMany({author: '余华'}, {is_hot: true}, (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        console.log(data)
    })
})

mongoose.connection.on('error', () => {
    console.log('got error')
})

mongoose.connection.on('close', () => {
    console.log('disconnected')
})