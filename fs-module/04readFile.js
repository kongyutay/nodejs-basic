const fs = require('fs')

//传递3个参数，文件名，配置对象和回调函数。
//data是读取的内容资料
fs.readFile('./观书有感.txt', (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    //获得的data是一个buffer（读取后载入内存）要用tostring方法转换以下
    console.log(data.toString())
})

//只接受一个参数
let data = fs.readFileSync('./观书有感.txt')
console.log(data.toString())

//应用场景
//电脑开机
//编辑器打开文件
//运行程序 - 读取后载入到内存
//播放视频和查看图片
//播放音乐
//查看日志
//上传文件
//查看聊天记录（通常保存在本地）