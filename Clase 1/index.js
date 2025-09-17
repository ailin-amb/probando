//Javascript

//Javascript es un lenguaje de programacion interpretado, dinamico y de alto nivel,
//dise;ado originalmente para ejecutarse en navegadores web. Es de tipado debil/dinamico,
//orientado a objetos mediante prototipos y basado en eventos. Permite manipular el DOM (Document Object Model),
//gestionar eventos, realizar peticiones asincronicas y crear aplicaciones web interactivas.
//Aunque nacio cpmo un lenguaje del lado del cliente, hoy tambien se usa en el servidor gracias a entornos
//como Node.js, lo que lo convierte en un lenguaje multiproposito ampliamente adaptado en el desarrollo web moderno.


console.log("Hola! Bienvenidos a TP2!")

//Anterior a ECMAScript 6
// VAR NO SE UTILIZA!!!
var x = 40
var y = 2
x = 15

//operadores
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

//ECMAScript 2015 - ES6
//LET & CONST
let saludo = "hola"
saludo = "Hola a todos!"
saludo = true

//let no se puede redeclarar, pero si pisar el valor original

//CONST
const cosa = "termo"
// no se puede pisar su valor original
console.log(cosa)

//tipos de datos
let num = 19
let str = "Holaaa"
let bool1 = true
let bool2 = false

//estructuras 
// objeto = clave-valor
let obj = {
    1: "Amarillo",
    2: "Verde",
    3: "Azul",
    4: 19,
    "A": true
}

console.log(obj)

let arr = ["hola", "como", "va", 109, false, [1, 2, 3], null, undefined]

console.log(arr)

//funcion tradicional (cuando hay mucho codigo)
const nombre = "Debo"

function bienvenida(name) {
    console.log("Hola " + name + "!")
    //Template string ALT + 96
    console.log(`Hola ${name}!!!`)
}


bienvenida(nombre)

//Funcion flecha (ejecucion mas rapida y corta)
const num1 = 20
const num2 = 10

const suma = () => {
    console.log(num1 + num2)

}

suma()

// para volver a la carpeta anterior cd ..
//para subir mi codigo a github ( o cualquier repositorio)
//Primero consultar el status: git status
//Realizar una seleccion de los archivos a subir: git add ... / git add .(sube todos, tener en cuenta el espacio)
//Commitear ponerle una identificacion al codigo que estoy subiendo: git commit -m "blah blah"
//Para consultar los commit: git log
//Despliegue en la nube de mi codigo: git push origin "nombre de la rama" / git push origin main