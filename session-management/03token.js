const jwt = require('jsonwebtoken');

//用sign方法创建token，传入用户数据，加密字符串，和配置对象，可以设置token的生命周期
let token = jwt.sign({
    username: '张三',
}, 'atguigu', {
    expiresIn: 60,      //单位是秒
});

console.log(token)

let t = 'asdf'

jwt.verify(t, 'atguigu', (err, data) => {
    if(err) {
        console.log('校验失败')
        return
    }
    console.log(data)
})