const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();

app.use(session({                                       //接受对象，返回函数
    name: 'sid',                                        //设置cookie的name，默认值是connnect.id
    secret: 'atguigu',                                  //参与加密的字符串（又称签名）
    saveUninitialized: false,                           //是否为每次请求都设置一个cookie用来存储session 的id，是否每个请求都创建session对象，通常没有必要，除非你想为匿名用户做信息记录
    resave: true,                                       //是否再每次请求时重新保存session，对生命周期进行更新，例如银行账户一直操作就可以可保持登录
    store: MongoStore.create({
        mongoUrl: 'mongodb:127.0.0.1:27017/project'     //数据库的链接配置
    }),
    cookie: {                                           //设置响应内cookie的特性
        httpOnly: true,                                 //开启后前端无法通过 JS 访问document.cookie
        maxAge: 1000 * 300                              //控制sessionID的过期时间，同时也是cookie的生命周期
    },
}))

app.get('/', (req, res) => {
    
})

app.listen(3000)