// 要求：
// 搭建一个http服务，响应一个4行3列的表格，并且要求表格有隔行换色效果哦，且点击单元格能高亮显示

const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    let html = fs.readFileSync(__dirname + '/10table.html');
    response.end(html); //End 方法可以传递字符串也可以是buffer
});

server.listen(9000, () => {
    console.log('服务已经启动');
})