var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello world\n');

}).listen(1337,'127.0.0.1');
/*Al intentar correr el código en consola esta se queda trabada, sin embargo al entrar a localhost:1337 que es la direccion que dimos
nos damos cuenta de lo que pasa, no se queda trabada ejecuta el servidor local, este proceso se puede detener si precionamos las teclas
"Ctrl + C" en la consola. Una vez entramos a la página vemos el "Hello World" y al abrir las “herramientas para el desarrollador” en la 
sección de "Red" nos da algunos datos en los "headers":

GET http://localhost:1337/:
Estado 200 OK
Versión HTTP/1.1
Transferido 169 B (tamaño 12 B) 


Encabezados de la respuesta (157 B):
Connection: keep-alive
Content-Type: text/plain
Date: Sun, 20 Mar 2022 07:48:51 GMT
Keep-Alive: timeout=5
Transfer-Encoding: chunked
*/