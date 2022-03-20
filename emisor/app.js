//var Emitter = require('./emitter');
var Emitter = require('events');
const config = require('./config');
/*La dependencia del “event emitter” de NODE JS funciona tambien, sin embargo, "require()" no es parte de la API de JavaScript estándar. 
Pero en Node.js, es una función integrada con un propósito especial: cargar módulos. Una gran diferencia entre los módulos de Node.js 
y el JavaScript del navegador es cómo se accede al código de un script desde el código de otro script.

    -En el navegador JavaScript, los scripts se agregan a través de el <script> element. Cuando se ejecutan, todos tienen acceso 
    directo al alcance global, un "espacio compartido" entre todos los scripts.
    -En Node.js, cada módulo tiene su propio alcance. Un módulo no puede acceder directamente a las cosas definidas en otro módulo a 
    menos que decida exponerlas. Para exponer elementos de un módulo, deben asignarse a "exports" o "module.exports". Para que un módulo 
    acceda a otro módulo exportso module.exports, debe usar "require()". */

var emtr = new Emitter();
emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});
/*El archivo compila bien, usado las "magic strings" te ahorras una posible falta ortográfica al escribir la string, simplemente se
declara en una vez la string en un archivo aparte y se llama cada vez que se quiera utilizar evitas el estarla escibiendo siempre y
la posibilidad de escribirla mal y que sea dificil encontrar el error.*/
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
