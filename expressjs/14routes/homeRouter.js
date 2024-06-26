const express = require('express');

const router = express.Router();
//router对象相同与小型app对象

//创建路由规则
router.get('/home', (req, res) => {
    res.send('前台首页');
});

router.get('/search', (req, res) => {
    res.send('搜索');
});

module.exports = router;