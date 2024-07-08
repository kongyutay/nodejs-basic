const fs = require('fs')

//这是一个异步函数，不会等它写完才继续执行，之后才把回调函数压入任务队列当中
//writefile 传入4个参数
//文件名，如果不存在会自动创建并写入
//内容
//可选，配置对象
//回调函数，写入完成之后会直接调用这个函数，并把错误（错误对象）传入函数，如果没有错误就是null

fs.writeFile('./filename.txt', 'content', err => {
    if(err) {
        console.log('写入成功')
        return
    }
    console.log('写入失败')
})

//同步的方法写入，会等待回来，参数差不多，没有回调函数，更容易理解
fs.writeFileSync('./fileName2.txt', 'content2');