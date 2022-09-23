import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        nombre: "Producto 1",
        categoria: "electronica",
        valor: 500
    },
    {
        nombre: "Producto 2",
        categoria: "ropa",
        valor: 200
    },
    {
        nombre: "Producto 3",
        categoria: "joyeria",
        valor: 750
    }
]

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducer:{

    }

})

export default productsSlice.reducer