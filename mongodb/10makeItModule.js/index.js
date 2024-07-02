const mongoose = require('mongoose');
const db = require('./db/db');
const BookModel = require('./models/BookModel');

db(()=>{
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
        mongoose.disconnect();
    })

}, ()=> {
    console.log('链接失败')
});

    