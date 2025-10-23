//import fs from "fs"
import api from "./api.js"
import http from "http"

let parseData;

async function getDataApi() {
    const dataApi = await api.fetchApi()
    parseData = await dataApi.json()
}

getDataApi()

//crear servidor
const server = http.createServer((req, res) => {
    //REQ -> objeto de requerimento o solicitud
    //RES -> objeto de respuesta
    //GET: obtener, visualizar informacion
    //POST: aniadir informacion
    //PUT: sobreescribe el total de la informacion
    //PATCH: sobreescribe un valor parcial
    //DELETE: eliminar informacion
    const {url, method} = req
    console.log(url, method)

    if(method === "GET" && url === "/") {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Bienvenidos!')
    } else if (method === "GET" && url === "/api") {
        //Encabezado
        res.writeHead(200, {'Content-Type': 'application/json'}) //es requuerido. tenemos un objeto javascript y lo caambiamos.
       //Respuesta
        res.end(JSON.stringify(parseData)) //convertimos el objeto a un string
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Error, no especificado')
    }

    })

//levantar el servidor
server.listen(8080, () => console.log("Servidor levantado..."))