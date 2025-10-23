import e from "express"

const products = [
    {id: 1, name: "Monitor", color: "Negro"},
    {id: 2, name: "Mouse", color: "Violeta"},
    {id: 3, name: "Hub", color: "Gris"},
    {id: 4, name: "Notebook", color: "Verde"}
]

const getProducts = async () => {
    return await products
}

const postProducts = async (prod) => {
    products.push(prod)
    return await products
}


const putProducts = async (id, prod) => {
    const index = products.findIndex((e) => e.id == id)
    if (index == -1) {
        return "Error, no se encontro el id"
    } else {
        prod.id = Number(id)
        products.splice(index, 1, prod)
        return prod
    }
}
export default {
    getProducts,
    postProducts,
    putProducts
}

// esto se exporta y se pasa a la capa de servicios.