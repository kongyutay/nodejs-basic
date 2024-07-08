const fs = require('fs')

//相对路径
fs.writeFileSync('./index.html', 'love')    //当前文件夹
fs.writeFileSync('index.html', 'love')      //同上
fs.writeFileSync('../index.html', 'love')   //上级目录

//绝对路径
fs.writeFileSync('D:/index.html', 'love')   //直接在D盘写入目录，C盘则需要权限，否则会报错
fs.writeFileSync('/index.html', 'love')     //在盘符的根目录下面建立文件夹，就是最高层