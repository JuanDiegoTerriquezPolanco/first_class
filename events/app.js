let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',
    keypress: function (){
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function () {
        console.log('El puntero del mouse esta arriba');
    }
}
/*Se llama 2 veces, en la primera se llama con el nombre que se le dio al parametro, en la segunda se hace una cadena que llama tambien
 a la propiedad, ya que cada propiedad está asociada con un valor de cadena que se puede utilizar para acceder a ella*/
console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre'
console.log(obj[myKey]);
/*JavaScript llama a la variable "myKey" que tiene la cadena con valor "nombre" y ya que cada propiedad se puede llamar con una cadena
 al llamar a la variable dentro del objeto se llama a la propiedad*/
myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());
/*Ahora a myKey se le cambian los valores a las cadenas, esto llama a los parametros que esta vez son funciones anónimas sin embargo las
funciones necesitan sus parentesis por si hay parametros para trabajar con ellas*/

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log('hola desde el array');
});
console.log(myArray);
console.log(myArray[2].mouseOver());
console.log(myArray[3]());
/*El array es llamado y con ello todo lo de su interior se le el número, la cadena, el objeto, pero al no especificar que datos, te
devuelve todos; y la función al no recibir datos o los parentesis no devuelve nada, así como las del objeto*/

/*La función "mouseOver" puede ser llamada del objeto dentro del array, el poner los parentesis hace que ahora la función "tenga" datos
con los cuales trabajar y devolver el resultado*/

/*La función anónima puede ser llamada dentro del array, el poner los parentesis hace que ahora la función "tenga" datos con los cuales 
trabajar y devolver el resultado*/

let funcArray = [];

funcArray.push(() => {
    console.log('Function 1');
});
funcArray.push(() => {
    console.log('Function 2');
});
funcArray.push(() => {
    console.log('Function 3');
});
funcArray.forEach((item) => {
    item();
});
/*El método forEach() ejecuta la función indicada una vez por cada elemento del array.*/


