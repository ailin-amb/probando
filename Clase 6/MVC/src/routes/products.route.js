import express from "express"
import productsController from "../controller/products.controller.js"

const router = express.Router() // aca se guardan todas las entidades y rutas

// se realiza la declaracion de los endpoints: router + VERBO+ "/url" + funccion del controlador
//La funcion que llamo que se encuentra dentro del controlador no se ejecuta, no se inicializa
router.get("/products", productsController.getProducts)
router.post("/products", productsController.postProducts)
router.put("/products", productsController.putProducts)

export default router
