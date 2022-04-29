const express = require('express'); //inyeccion de la dependencia
var app = express();
var PORT = process.env.PORT || 3000;//definicion del puerto de escucha
app.use('/assets',express.static(__dirname + '/public'))//contenido estatico
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/public/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola mundo</h1>
    <p> Este es un parrafo y su contenido debe ser azul</p></body> </html>`);
});

app.get('/person/:id', (req,res)=>{
    res.render('person',{ID: req.params.id, Qstr: req.query.qrst});
});
/*Aquí podemos apreciar que hay un cambio del método “res.send”, al método “res.render” y que ahora necesitamos enviar 2 parámetros, el 
nombre de la vista que debe “renderizarse” en el motor de vistas y los parámetros que va a recibir, en este caso, un objeto que contiene 
dos llaves ID y Qstr. A la llave ID, le pasamos el valor que viene de la ruta “/person/:id”, y el segundo valor, el del query string 
(cadena de consulta), ese valor es “parseado” por Express para nosotros y lo pone a nuestra disposición mediante “req.query” seguido 
del nombre del valor que usaremos en el query string cuando hagamos la petición HTTP. */

app.get('/person2/:id', (req,res)=>{
    res.render('person2',{ID: req.params.id, MSG: req.query.message, TIME: req.query.times}); /* Solicitamos el id para renderizarse, y 
    2 cademas de consulta, una para el tipo de mensaje y la otra para el numero de veces que se repetira el mensaje*/
});

app.listen(PORT);
