const express = require('express');
const app = express();

app.get('/:id.html', (req, res) => {
    console.log(req.params.id);     //params 可以保存所有的参数，id必须和占位符一样
    res.end('Some product');
});

app.listen(3000, () => {
    console.log('Server started, port 3000')
})