//Importacion de modulos/dependencias/librerias
//Forma de importacion tradicional: CommonJS
//const fs = require("fs") //importa el modulo

//Forma de importacion mas actual: Module
import fs from "fs";

//Desestructurin Object
//Un metodo para extraer valores a variables

//let a, b
//console.log(a);
//[a, b] = ["esto es A", "esto es B"]
//console.log(a, b)

//SINCRONISMO
//Secuencial y bloqueante
/* console.log("----------INICIO FS Sincronico----------");
function fsSync() {
  const data = fs.readFileSync("doc.txt", "utf8");
  console.log(data);
  const newData = fs.writeFileSync("doc.txt", "Sobreescribiendo...");
  console.log(newData);
  console.log(newData);
}
fsSync();
console.log("----------FIN FS Sincronico----------");
console.log("FUERAA!"); */
//ASINCRONISMO
//No es bloqueante y puede realizar multiples tareas a la vez

//Callback
//Funcion que se pasa a otra como parametro

/* function callback(a, b, cb) {
  //return es una palabra reservada y permite que la funcion si o si retorne un valor
  return cb(a, b);
}
function suma(x, y) {
  return x + y;
}

console.log(callback(10, 22, suma)); */

//Otro ejemplo de callbacks
//setTimeout(()=> {
//    console.log("Hola a todos!")
//}, 3000)

//setInterval(()=> {
//    console.log("Holaaaa")
//}, 6000)

/* console.log("----------INICIO ES CALLBACKS----------"); */

/* function fsCallbacks() {
  fs.readFile("doc.txt", "utf8", (err, data) => {
    console.log("Error de lectura en FS: ", err);
    console.log("Data en FS: ", data);

    fs.writeFile("doc.txt", "Testeando...", (erra, data) => {
      //CALLBACK HELL: No!!!
      //No se puede mantener a largo plazo, es un problema la lectura de las respuestas o saber donde termina cada proceso
      //Es poco performante porque tarda mucho mas por cuanto mas callbacks existan
      fs.readFile("doc.txt", "utf8", (err, data) => {
        console.log(data);
      });
    });
  });
} */

/* fsCallbacks();
console.log("---------FIN ES CALLBACKS---------"); */

//PROMESAS
/* console.log("----------INICIO ES PROMESAS----------");
function fsPromises() {
  fs.promises.readFile("doc.txt", "utf8")
//resolve
    .then((respuesta) => console.log(respuesta))
    .then(() => {
      fs.promises.writeFile("doc.txt", "FS con promesas!");
    })
    .then(() => {
      fs.promises.readFile("doc.txt", "utf8")
      console.log("ASD")
    })/* 
    //rejected
    .catch((error) => console.log("ERROR EN FS PROMISES!!!! ", error))
    .finally(() => console.log("Mensaje u operacion que se ejecuta siempre!"))
}
fsPromises();
console.log("----------FIN ES PROMESAS----------"); */

//Asyn-Await
console.log("----------INICIO ES ASYNC AWAIT----------")
async function fsAsyncAwait() {
const data = await fs.promises.readFile("doc.txt", "utf8") //Aca el await me evite el uso del .then y .catch
console.log(data)
const writeDoc = await fs.promises.writeFile("doc.txt", "ES CON ASYNC AWAYT")
const data1 = await fs.promises.readFile("doc.txt", "utf8")
//const data1 = fs.promises.readFile("doc.txt", "utf8") => sin el await no funciona!
console.log("Linea 11: ", data1)
}

fsAsyncAwait()

console.log("----------FIN ES ASYN AWAIT----------")

//fetch -> es un metodo de Javascript para consultar APIs externas
async function fetchAPI() {
  const data = await fetch("https://httpstatusdogs.com/")
  console.log(data)
}

fetchAPI()