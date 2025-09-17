console.log("Servidor en Node!");

//Scope
let num1 = 20;
let num2 = 18;

function suma(x) {
  let num2 = 0;
  console.log(x + num2);
}

suma(num1);

//Listas-Arrays
const arr1 = ["verde", "naranja", "violeta", "rojo"];
const arr2 = ["blanco", "negro"];
console.log(typeof arr1);
console.log(arr1[0]);
console.log(arr1.length); //para saber la extension del arr
arr1.push("azul");
console.log("arr1 actualizado: ", arr1);
console.log(arr1[arr1.length - 1]); //para saber el ultimo elemento de la lista si no se la posicion
console.log("Concat: ", arr1.concat(arr2));
arr1.pop(); //elimina cualquier ultimo elemento de un arr
console.log("Pop: ", arr1);

//Objetos
const obj1 = {
  1: "notebook",
  2: "mouse",
  3: "teclado",
};

const obj2 = {
  4: "mate",
  5: "termo",
  6: "yerba",
};

console.log(typeof obj1);
obj1["teclado"] = "teclado inalambrico";
console.log(obj1);
//Numerosdirectos no aceptados ni al cambiarlo con Num()
obj1.valor = "monitor";
console.log(obj1);
console.log(Object.keys(obj1));
//Typeof me da el tipo de dato primitivo
//Array.isArray -> me confirma si es un array o no
console.log(Array.isArray(Object.values(obj2)));
console.log(Array.isArray(obj2));
console.log("hasOwnProperty: ", obj1.hasOwnProperty(1));
console.log("hasOwn: ", Object.hasOwn(obj1, "mouse"));