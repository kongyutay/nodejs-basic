const fs = require('fs')

//make directory的意思，接受3个参数，文件夹路径，配置对象和回调函数
fs.mkdir('./html', err => {
    if(err){
        console.log('fail')
        return
    }
    console.log('success')
})

//递归创建法，有层级的创建，recursive是递归的意思
fs.mkdir('./a/b/c', {recursive: true}, err => {
    if(err){
        console.log('fail')
        return
    }
    console.log('success')
})

//读取文件夹，会返回数组，里面是文件的名称
fs.readdir('../data', (err, data) => {
    if(err){
        console.log('fail')
        return
    }
    console.log(data)
})

fs.readdir('./', (err, data) => {
    if(err){
        console.log('fail')
        return
    }
    console.log(data)
})

//删除文件夹
fs.rmdir('./html', (err, data) => {
    if(err){
        console.log('delete fail')
        return
    }
    console.log('delete success')
})

//递归删除, 要添加配置对象，在新版本的nodejs已经移除这个，要直接使用fs.rm 方法
fs.rmdir('./a', {recursive: true},  (err, data) => {
    if(err){
        console.log('delete fail')
        return
    }
    console.log('delete success')
})

fs.rm('./a', {recursive: true},  (err, data) => {
    if(err){
        console.log('delete fail')
        return
    }
    console.log('delete success')
})