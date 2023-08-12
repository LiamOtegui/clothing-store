import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        filteredProducts: JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
        detail: JSON.parse(sessionStorage.getItem('oneProduct')) || storeData,
    },
    reducers: {
        filterProducts(state, action) {
            try {
                const filter = storeData.filter((product) => product.type === action.payload)
                state.filteredProducts = filter
                
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem("filteredData", saveState)
            } catch (error) {
                return error
            }
        },
        productDetail(state, action) {
            try {
                const oneProduct = storeData.filter((product) => product.id === action.payload)
                state.detail = oneProduct

                const saveState = JSON.stringify(oneProduct)
                sessionStorage.setItem("oneProduct", saveState)
            } catch (error) {
                return error
            }
        }
    }
})

export const { filterProducts, productDetail } = productsSlice.actions
export default productsSlice.reducer