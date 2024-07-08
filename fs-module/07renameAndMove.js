const fs = require('fs')

//重命名
fs.rename('./fileName1.txt', './newFileName.txt', err => {
    if(err) {
        console.log('操作失败')
        return
    }
    console.log('操作成功')
})

//移动
fs.rename('./fileName1.txt', './data/fileName1.txt', err => {
    if(err) {
        console.log('操作失败')
        return
    }
    console.log('操作成功')
})

//同步方法，参数一样，但是没有回调函数
//fs.renameSync()

//本质上这两个都是更改文件路径，旧的文件路径去新的文件路径