const express = require('express'); //inyeccion de la dependencia
var app = express();
var PORT = process.env.PORT || 3000;//definicion del puerto de escucha
app.use('/assets',express.static(__dirname + '/public'))//contenido estatico

app.use(express.urlencoded({ extended: false }));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/public/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola mundo</h1>
    <p> Este es un parrafo y su contenido debe ser azul</p></body> </html>`);
});

app.get('/person/:id', (req,res)=>{
    res.render('person',{Name: req.params.id, Message: req.query.message, Times:req.query.times});
});

app.post('/student', (req,res)=>{
    res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`);
});

app.get('/student',(req,res)=>{
    res.render('index')
});

app.listen(PORT);
