import productsModel from "../models/products.model.js"

//logica de negocios iria aca

const getProducts = async () => {
    const products = await productsModel.getProducts()
    return products
}

const postProducts = async (prod) => {
    //logica de negocio pendiente si es necesaria...
    //podria existir validacion
    const products = await productsModel.postProducts(prod)
    return products
}

const putProducts = async (id, prod) => {
    const products = await productsModel.putProducts(prod)
    return products
}
export default {
    getProducts,
    postProducts,
    putProducts
}