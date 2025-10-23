import productsService from "../services/products.service.js"

//Se encarga del manejo de la solicitud y la generacion de la respuesta

const getProducts =async (req, res) => {
    const products = await productsService.getProducts()
    res.send(products)
}   

const postProducts = async (req, res) => {
    const prod = req.body
    //podria validar q el objeto no este vacio
    const product = await productsService.postProducts(prod)
    res.send(data)
}   

const putProducts = async (req, res) => {
    const { id } = req.params
    const prod = req.body
    const product = await productsService.putProducts(id, prod)
    res.send(data)
}   

export default{
    getProducts,
    postProducts,
    putProducts
}