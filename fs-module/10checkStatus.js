const fs = require('fs')

fs.stat('../笑看风云.mp4', (err, data) => {
    if(err){
        console.log('status fail')
        return
    }
    console.log(data)   //返回一个对象，可以查看size，birthTime，atime，mtime，ctime等等属性
    console.log(data.isFile())  //看是不是文件
    console.log(data.isDirectory())  //看是不是文件夹)
})