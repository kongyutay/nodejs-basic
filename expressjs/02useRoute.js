const express = require('express');
const app = express();

//app.方法(path, callbackFunction)
app.get('home', (req, res) => {
    res.end('hello express');
});

app.get('/', (req, res) => {
    res.end('home');
});

app.post('/login', (req, res) => {
    res.end('login login');
});

app.all('/test', (req, res) => {
    res.end('all')
})

app.all('*', (req, res) => {
    res.end('404 not found.')
})

app.listen(3000, () => {
    console.log('Server started, port 3000');
});