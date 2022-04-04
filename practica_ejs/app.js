var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use('/assets',express.static(__dirname + '/public'))
app.set('view engine','ejs');

app.use('/', function(req,res,next){
    console.log('Request Url:' + req.url);
    next();
});
app.get('/',function (req,res){
    res.render('index');
});
app.get('/pairorodd/:id',function (req,res){
    res.render('pairOrOdd',{ ID: req.params.id}); //se llama el archivo 'pairOrOdd' y se le manda el valor de ID
});
app.get('/api',function (req,res){
    res.json({firstname: 'John', lastname: 'Doe'});
});

app.listen(port);
