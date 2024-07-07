const fs = require('fs')

fs.writeFile('./filename.txt', 'content', err => {
    if(err) {
        console.log('写入成功')
        return
    }
    console.log('写入失败')
})