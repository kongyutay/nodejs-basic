const fs = require('fs')

//fs模块相对路径参照物并不是这个文件的当前目录，而是命令行的工作目录
fs.writeFileSync('./index.html', 'love')

//要用绝对路径来解决
//__dirname保存这个文件所在目录的路径
console.log(__dirname)

//可以做拼接
fs.writeFileSync(__dirname + './index.html', 'love')

//__dirname和__filename的区别
//都是返回绝对路径，dirname返回路径而已，filename返回全部，包括文件名字