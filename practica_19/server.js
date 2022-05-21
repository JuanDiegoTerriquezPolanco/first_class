const mongoose = require('mongoose');
const express = require('express');
const personRoutes = require('./routes/persons')

mongoose.Promise = global.Promise;
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded( {extended:false} ));
app.use(personRoutes);

mongoose.connect(
    `mongodb+srv://JuanDiegoTP:NnT2tj9HkujvhvH1@cluster0.ddpcf.mongodb.net/?retryWrites=true&w=majority`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);

const db = mongoose.connection;
db.on("error",console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.listen(3000);