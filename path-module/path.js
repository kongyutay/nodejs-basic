const path = require('path');

console.log(__dirname + '/index.html');
//以上的分割符是不统一的\有的用这个/

//path.resolve  拼接规范的绝对路径
//path.sep      获取操作系统的路径分隔符
//path.parse    解析路径并返回对象
//path.basename 获取路径的基础名称
//path.dirname  获取路径的目录名
//path.extname  获得路径的拓展名

path.resolve(__dirname, './index.html')     
path.resolve(__dirname, 'index.html')                   //也行
path.resolve(__dirname, '/index.html')                  //不行，因为index。html直接是绝对路径了会给出C:\index.html
path.resolve(__dirname, '/index.html', './test')        //会直接拿参数2和3进行拼接
//path.resolve 会把绝对路径__dirname 和相对路径index.html进行计算，拼接处绝对路径

console.log(path.sep);  //会获得反斜线，linux会获得正斜线

console.log(__filename); //当前文件的绝对路径
let str = __filename;
console.log(path.parse(str));
/* {
    root: 'D:\\',
    dir: 'D:\\nodeJS\\path\\代码',
    base: 'path.js,
    ext: '.js',
    name: 'path'
} */

path.basename(str)
path.dirname(str)
path.extname(str)