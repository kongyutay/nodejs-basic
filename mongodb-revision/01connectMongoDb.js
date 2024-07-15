const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

mongoose.connection.once('open', ()=> {})
mongoose.connection.on('error', ()=> {})
mongoose.connection.on('close', ()=> {})

mongoose.disconnect()