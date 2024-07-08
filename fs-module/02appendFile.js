const fs = require('fs');

//异步方法写入
fs.appendFile('./fileName.txt', '\r\ncontent3', (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('成功写入')
})

//同步方法写入
//\r\n  是window的换行方法
//\n 是linux的换行方法
//\r 是mac的换行方法
//如果没办法确定用户使用的操作系统可以使用\n统一，一般上都可以正确解析
//或者使用os模块const os = require('os') const EOL = os.EOL 可以获取操作系统的换行符，然后做字符串拼接'This is line one' + EOL + 'This is line 2'
fs.appendFileSync('./fileName.txt', '\r\ncontent4');

//write file 方法也可以，但是要加入配置对象参数
fs.writeFile('./fileName.txt', 'love love love', err => {
    if(err){
        console.log('写入失败')
    }
    console.log('替换成功')
})
//以上代码只会把文件内所有内容替换掉

//把配置对象内的flag加入a（append file 的意思）就可以追加内容
fs.writeFile('./fileName.txt', 'love love love', {flag: 'a'}, err => {
    if(err){
        console.log('写入失败')
    }
    console.log('追加成功')
})