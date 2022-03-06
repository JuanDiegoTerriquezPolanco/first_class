var Emitter = require('./emitter');
var emtr = new Emitter();
emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});
emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet');
/*Por lo que entendí, en emitter.js se creo un objeto vacio, se le creo una funcion on la cual recibe 2 parametros "greet" y la funcion
para comentar, luego se vuelve a llamar otra vez con "greet" pero el mensaje de la funcion cambia, al momento de llamar la funcion emit
en lugar de aparecer el ultimo registrado aparecen ambos, esto sucede por la comparacion si tiene algo se toma, si no se le pone un 
espacio vacio para otra funcion. Al final greet es como un array de funciones, si el index 1 esta lleno le da un campo vacio y al final
cuando lo llamas se ejecutan ambas funciones almacenadas*/

emtr.on('jump',()=>{
    console.log('someone jumped!');
});
console.log(emtr)
emtr.emit('jump');
/*En este caso al llamar el objeto te devuelve lo que tiene en su interior, pero al ser funciones necesitan los datos para funcionar,
por el otro lado, se agrega otro parametro al objeto llamado "jump" y al ser llamado el objeto se ejecuta la funcion de este tambien.*/
