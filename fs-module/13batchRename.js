const fs = require('fs')

//读取code文件夹
const files = fs.readdirSync('./code')

console.log(files)

//遍历进行判断和处理
files.forEach(item => {
    //拆分文件名
    let data = item.split('-')
    //解构成2块
    let [num, name] = data
    
    if(Number(num) < 10) {
        num = '0' + num;
    }
    let newName = num + '-' + name;
    fs.renameSync(`./code/${item}`, `./code/${newName}`)
})