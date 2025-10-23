const fs = require("fs")
const express = require("express")
const dateFetchAppRM = require("./api.js")

function getDataApi() {
dateFetchAppRM.fetchApi()
// La respuesta del servidor tiene un formato sin procesar
//.then((res) => console.log(res))
//Aca se parsea la respuesta --> .json
// Convertir a un objeto Javascript la respuesta de un servidor
.then((res) => res.json())
.then((data) => console.log("Datos: ", data))
.catch((err) => console.log(err))
}

getDataApi()