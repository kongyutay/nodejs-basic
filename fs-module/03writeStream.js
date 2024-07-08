//需求：写一首诗歌
const fs = require('fs')

//创建写入流对象，更适合写入频率很高的场景，通信不挂断，适合大文件的写入
//和文件建立一个通道，什么时候想写就直接写就可以了
const ws = fs.createWriteStream('./观书有感')

ws.write('内容1')
ws.write('内容2')
ws.write('内容3')
ws.write('内容4')
ws.write('内容5')

//关闭写入流，不写也可以，脚本执行完毕之后资源也会被断开释放
ws.close()