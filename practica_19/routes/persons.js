const express = require('express');
const router = express.Router();
const mongoose = require('../node_modules/mongoose');
let Person = require('../models/person');

router.get('/persons', function(req, res, next) {
    Person.find(function(err, persons) {
        if (err) return next(err);
        //res.json(person);
        res.render('personsIndex', { persons });
    });
});

router.get('/person', function(req, res) {
    res.render('person');
});
router.get('/main', function(req, res) {
    res.render('main');
});

router.post('/addPerson', function(req, res) {
    // console.log(req.body);
    const myPerson = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    }); // crea la entidad
    myPerson.save(); //guarda en bd
});

module.exports = router;