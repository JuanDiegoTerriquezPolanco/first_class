let greeting = "Hello from greet 5";
let greet = () => {
    console.log(greeting);
}
module.exports = {
    greet:greet
}
/*Se creo una variable con el contenido en string, se crea otra variable con una funcion que manda un mensaje a consola con el string
de la primer variable, al final se introduce la variable con funcion a una propiedad de un objeto.*/