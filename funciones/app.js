function greet(){
    console.log("Hello");
}
greet(); //inveke

//functions as parameters
function logGreeting(fn){
    fn();
};
logGreeting(greet);
//estamos pasando la función greet como
//parámetro e invocandola con el nombre del argumento fn

//funtion expression
let greetMe = function(){
    console.log("Hello from the function expression");
}
greetMe();

logGreeting(greetMe);
//funtions are first class, pass it as a parameter