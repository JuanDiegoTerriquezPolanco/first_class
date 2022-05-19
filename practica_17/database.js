const mongoose = require('mongoose');

mongoose.connect ('mongodb+srv://JuanDiegoTP:NnT2tj9HkujvhvH1@cluster0.ddpcf.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));