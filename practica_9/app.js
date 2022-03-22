const express = require('express');
const app = express();

app.get('/', (req,res) => {//route handler
    res.send('Hello World, this is the root route');
});

app.listen(3000);
app.get('/uno', (req,res) => {//route handler
    res.send('Hello World, frome route One');
});
app.get('/prueba', (req,res) => {//route handler
    res.send('Hello World, frome route Prueba');
});