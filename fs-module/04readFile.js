const fs = require('fs')

//传递3个参数，文件名，配置对象和回调函数。
//data是读取的内容资料
fs.readFile('./观书有感.txt', (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    //获得的data是一个buffer要用tostring方法转换以下
    console.log(data.toString())
})

//只接受一个参数
let data = fs.readFileSync('./观书有感.txt')
console.log(data.toString())