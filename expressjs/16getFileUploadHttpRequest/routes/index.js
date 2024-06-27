var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//显示网页表单
router.get('/portrait', (req, res) => {
  res.render('portrait');
})

//处理文件上传
router.post('/portrait', (req, res) => {
  //创建表单对象，但是要保存文件路径，因为之后用户可能要访问
  const form = formidable({
    multiples: true, 
    uploadDir: __dirname + '/../public/images',
    //保持文件后缀
    keepExtensions: true
  });
  //解析请求报文
  form.parse(req, (err, fields, files) => {
    if(err) {
      next(err);
      return;
    }
    console.log(fields);    //只保存一般字段
    console.log(files);     //只保存files类型的数据
    //formidable可以完成body parser能做的一些事情
    //通常文件上传都会保存文件

    //用户应该发/images/qwer.jpg的请求
    let url = '/images/' + files.portrait.newFilename; //将来要把这个数据保存到数据库中
    res.send(url);
  })
})

module.exports = router;
