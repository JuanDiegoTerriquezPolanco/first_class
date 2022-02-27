let greet = () => console.log("Hello");
greet(); //inveke

//functions as parameters
let logGreeting = fn => fn();
logGreeting(function () {
    console.log("Hello from a function created on the fly")
});
//estamos pasando la función greet como
//parámetro e invocandola con el nombre del argumento fn

//funtion expression
let greetMe = () => console.log("Hello from the function expression");
greetMe();

logGreeting(greetMe);
//funtions are first class, pass it as a parameter

//interpolacion de strings "clasica"
let logGreeting1 = (miNombre,miColor) =>{
    console.log("Hola" + miNombre + "buenos dias! Tu color favorito es el" + miColor);
}
logGreeting1("Carlos","azul");