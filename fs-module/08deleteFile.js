const fs = require('fs')

//调用unlink方法
//unlinkSync同步方法
fs.unlink('./观书有感.txt', err => {
    if(err) {
        console.log(err)
        return
    }
    console.log('success')
})

//调用rm方法也可以但是是node 14.4之后的版本
//rmSync同步方法
fs.rm('./论语.txt', err => {
    if(err) {
        console.log(err)
        return
    }
    console.log('success')
})