let express = require('express'); //inyección de la
let router = express.Router();
//instanciacion del "router" al que asociaremos todas

router.get('/person',(req,res)=>{
    res.send('has solicitado el listado de personas');
})

module.exports = router;