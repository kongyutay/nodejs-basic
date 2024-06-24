//如果访问/singer/1.html，就会返回对应资料

const data = 
[
    {
        "singer_name": "周杰伦",
        "singer_pic": "jaychou url",
        "other_name": "Jay Chou",
        "singer_id": 4558,
        "id": 1,
    },
    {
        "singer_name": "林俊杰",
        "singer_pic": "jaychou url",
        "other_name": "JJ Lin",
        "singer_id": 4286,
        "id": 2,
    }
]

const express = require('express');
const app = express();

app.get('/singer/:id.html', (req, res) => {
    const id = req.params.id;
    let result = singers.find(item => {
        if(item.id === Number(id)) {
            return true
        }
    })

    if(!result) {
        res.statusCode = 404;
        res.end('404 Not Found')
    }

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h2>${result.singer_name}</h2>
            <img src='${result.singer_pic}' />
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Server started, port 3000')
})