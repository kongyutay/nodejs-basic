const db = require('./db/db');
const MovieModel = require('./models/MovieModel');

db(()=> {
    MovieModel.create({title:'让子弹飞', director: '姜文'}, (err, data) => {
        if(err){
            console.log('插入失败')
            return
        }
        console.log('插入成功')
    })
})