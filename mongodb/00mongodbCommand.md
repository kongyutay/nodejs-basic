Mongodb command
数据库命令
show dbs
db
use <库名>
db.dropDatabase()

集合命令
db.createCollection('集合名称')
show collections
db.集合名.drop()
db.集合名.renameCollection('新名字')

文档命令
Create
db.集合名.insert(文档对象)
```
db.collectionName.insert({name: 'A', age: 10})
```

Read
db.集合名.find(查询条件) 也可以不放条件
```
db.users.find({age:20})
```

Update
```
db.集合名.update(查询条件，新的文档)
```
会直接替换旧的对象
```
db.集合名.update({name: '张三'}, {$set: {age:19}})
```

Delete
```
db.集合名.remove(查询条件)
```

## 数据库操作应用场景
### 增加
用户注册
发布视频
发布商品
发朋友圈
发评论
发微博
发弹幕

### 删除
删除评论
删除商品
删除文章
删除视频
删除微博
有些项目不会直接删除，而是做伪删除

### 更新
更新个人信息
修改商品价格
修改文章内容

### 查
商品列表
视频列表
朋友圈列表
微博列表
搜索功能