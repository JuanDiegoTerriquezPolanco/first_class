let greet = require('./greet');
greet();

let persona = {
    nombre: "Carlos",
    apellidos: "Ulibarri",
    getName: function(){
        return `Nombre: ${this.nombre}, Apellido: ${this.apellidos}`
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima"
    },
    getAdress: function(){
        return `Calle: ${this.domicilio.calle}, Colonia: ${this.domicilio.colonia}, CP: ${this.domicilio.cp}, Municipio: ${this.domicilio.municipio}`
    }
}
console.log(persona.getName());
console.log(persona.getAdress());