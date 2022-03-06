let greet = require('./greet1')
let greet2 = require('./greet2').greet;

greet();
greet2();
/*Al exportar la variable a otro archivo o modulo esta puede ser ejecutada aqui, soltando el mensaje que esta en el modulo greet1.js*/
/*Al requerir greet de greet2, pone al final lo que se requiere de ese modulo .greet, lo cual da error porque ese parametro no existe
en el require, sino en la funcion que se exporto, que ahora es greet2*/
/*Se crea otra variable y ahora si se pide el parametro que se desea cuando se invoca abajo para correrla*/
/*O bueno, tal vez si la tiene greet solo que no estava adjunta al modulo*/

const greet3 = require('./greet3'); //objeto construido/instanciado
console.log(greet3);
greet3.greet();
greet3.greeting = "Hello from the App";
let greet3b = require('./greet3');
greet3b.greet();
/*Se expone toda la funcion, en lugar de mostrar el mensaje a consola*/
/*Entonces el require no llama el valor de lo que llama solo su espacio en memoria para correrlo*/
/*Ahora que tiene el espacio en memoria correl el mensaje que ya tenia y el nuevo que se puso*/

const Greet4 = require('./greet4') //constructor
let myGreet = new (Greet4);
myGreet.greet();
/*Llamas al modulo greet4 y tomas su clase constructora pero no sale su estructura porque lo inicializas como nueva clase en este
modulo, pudiedo así utilizar sus funciones*/

const greet5 = require('./greet5');
greet5.greet();
/*Así cuando es llamdo aca solo se tiene acceso a dicha propiedad del objeto*/