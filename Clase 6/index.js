import express from "express";

const app = express();
const PORT = 8080;

// Endpoints => puntos de acceso a nuestra API
//REQ => siempre me trae informacion de la solicitud
//RES => va a ser la respuesta generada por mi servidor

//Middleware -> funcion intermedia que existe entre la solicitud y la respuesta
//habilita el envio de informacion por formulario, si no lo pongo llega  ala consola undefined, ya q express no detecta q necesito hacer el envio de informacion por el formulario
app.use(express.urlencoded({ extended: true }));
//Parsea un objeto JSON a un objeto javascript
app.use(express.json());
const products = [
  { id: 1, name: "Monitor", color: "Negro" },
  { id: 2, name: "Mouse", color: "Violeta" },
  { id: 3, name: "Notebook", color: "Gris" },
];

//app + verbo + ruta +callback + logica dentro del callback + respuesta
//app.get("/", (req, res) => {
//Template string -> ALT +96
//res.send(`
//<form action="/" method="POST">
//    <label for="name">Nombre</label>
//      <input name="name" type="text"></input>
//<button type="submit">Enviar</button>
//  </form>
// `)
//})

//app.post("/", (req, res) => {
//const name = req.body.name
//console.log(name)
//REQ.BODY ->trae informacion desde el cuerpo de la solicitud
//res.send(name)
//})

//GET -> obtiene informacion
app.get("/", (req, res) => {
res.send("Ruta base");
})

app.get("/products", (req, res) => {
  res.send(products);
  //res.json({method: "GET", data: products}) // con esto me aseguro q va un json (pero hace lo mismo q el anterior y puedo agregar mensajes
});

// GET -> en este caso por id, que se envie un parametro por url no significa que sea un post
// los dos ":" aplican como variables dinamicas. si pongo :id o color o lo q fuer aigual entrara.
app.get("/products/:id", (req, res) => {
  //REQ.PARAMS -> es apartado "params" de la solicitud y permite obtener informacion via url
  //const { id, color } = req.params
  const { id } = req.params;
  // cualquier elemento que viaje por req.params es un string
  // === -> comparacion estricta
  // == -> compara el valor, no el tipo
  // convierte a objeto primitivo Number -> Number(id)
  const prodById = products.find((e) => e.id == id);
  res.send(prodById);
});


//POST -> envia informacion
app.post("/products", (req, res) => {
  const prod = req.body;
  products.push(prod);
  res.send(prod);
});

//PUT -> actualiza el total de la informacion
app.put("/products/:id", (req, res) => {
//desestructurin object -> extraer valores a variables
const { id } = req.params //usar mejor este q se hace todo en una sola linea.
//const id = req.params.id // es lo mismo que la linea de arriba, pero se suele usar desestructuring
  //Payload -> cualquier informacion necesaria que viaje en el cuerpo de una solicitud
  //const prod = req.body
  //const index = products.findIndex((e) => e.id == id)
  //if (index == -1){
    //res.send("Error. No se encuentra el id")
  //} else {
    //prod.id = Number(id)
    //products.splice(index, 1, prod) // en la posicion index, elimina 1 elemento y agrega prod
    //res.send("OK")
//}

//Desestructuracion de objetos. conviene cuando son datos complejos o muy largos, enl lugar de hacer una copia-map
const { name, color} = req.body
const product = products.find((e) => e.id == id)

if (!product) {
    res.send("No existe producto en la lista")
} else {
    product.name = name
    product.color = color
    res.send(product) //esta es otra manera de hacerlo, si quiero algo especifico
}

})

//PATCH -> actualiza una porcion de la informacion
app.patch("/products/:id", (req, res) => {
    const { id } = req.params
    const prod = req.body
    const index = products.findIndex((e) => e.id == id)
    //Desestructuracion de objetos -> hace una copia o extraccion de valores a variables
    //Spread Operator -> hace una copia o expande los valores de un objeto o un array
    if (index == -1){
        res.send("Error. No se encuentra el id")
    } else {
        const newPatch = {...products[index], ...prod} // de esta manera hago una copia del objeto original y le aplico los cambios del prod
   //const newPatch = {... products[index]} // hago una copia del objeto original. no olvidar el orden de las variables, es fundamental!!!
   products.splice(index, 1, newPatch)
        res.send(newPatch)
    }

  //  const product = products.find((e) => e.id == id)
    // Compara y pisa propiedades especificamente d eun objeto
    //const newPatch =Object.assign(product, prod)
    //res.send(newPatch)
})

app.delete("/products/:id", (req, res) => {
    const { id } = req.params
    const index = products.findIndex((e) => e.id == id)
    if(index != -1) {
    products.splice(index, 1)
res.send("El elemento fue eliminado correctamente")
}
res.send("No se encontro el elemento")  

})


app.listen(PORT, () => console.log("Server running..."));