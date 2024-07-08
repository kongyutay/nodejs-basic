const fs = require('fs')
const process = require('process')

//方法1：用readfile方法，把所有内容都读到内存当中，然后一次过写到文件当中
let data = fs.readFileSync('../document/笑看风云.mp4')
fs.writeFileSync('./笑看风云2.mp4', data)
console.log(process.memoryUsage())      //查看内容使用了量，看rss，单位是字节

//方法2：流式方法
const rs = fs.createReadStream('../document/笑看风云.mp4')
const ws = fs.createWriteStream('../document/笑看风云2.mp4')
//每一次读一点，写一点，所占资源更少，理想状态只需要64kb的内存空间就可以完成这个任务
//一般上读取速度比写入速度更快，没写完就读第二段数据了
rs.on('data', chunk => {
    ws.write(chunk)
})

//不能够直接这样写，因为上面的一段段还没有读完
//console.log(process.memoryUsage())

rs.on('end', () => {
    console.log(process.memoryUsage())
})

//方法3：读取流，读取之后用管道方法直接交给写入流
rs.pipe(ws)