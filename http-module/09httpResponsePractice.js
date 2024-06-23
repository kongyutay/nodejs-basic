// 要求：
// 搭建一个http服务，响应一个4行3列的表格，并且要求表格有隔行换色效果哦，且点击单元格能高亮显示

const http = require("http");

const server = http.createServer((request, response) => {
    
    response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                td {
                    padding: 20px 40px;
                }
                table tr:nth-child(odd) {
                    background: #aef;
                }
                table tr:nth-child(even) {
                    background: #fcb;
                }
                table, td {
                    border-collapse: collapse;
                }
            </style>
        </head>
        <body>
            <table>
            <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
            </tr>
            <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
            </tr>
            <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
            </tr>
            
        </table>
        <script>
            const tds = document.querySelectorAll('td');
            tds.forEach(item => {
                item.onClick = function(){
                    this.style.background = '#222";
                }
            })

        </script>

        </body>
        </html>
        
    `);
});

server.listen(9000, () => {
    console.log('服务已经启动');
})