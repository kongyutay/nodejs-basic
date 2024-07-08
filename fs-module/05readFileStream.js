//文件流读取，一块一块的读取内容，而不是一次过读取所有内容
const fs = require('fs')

//创建读取流对象
const rs = fs.createReadStream('../小看风云.mp4');

//用on方法绑定data事件，chunk有大块的意思
//每当读完一块的时候就会出发回调函数，把读到的内容传递给这个形参
rs.on('data', chunk => {
    console.log(chunk)  //会输出很多的buffer
    console.log(chunk.length) //会输出65536，代表65536字节 = 64kb
    console.log(chunk.toString()) //视频信息无法读取正常，会看到乱码
})

//一般上默认会出发end事件，下面代码可以不用写，除非你想绑定特定回调函数
rs.on('end', () => {
    console.log('读取完成')
})

//读取大文件的时候可以提高效率