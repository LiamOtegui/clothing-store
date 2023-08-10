import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        filteredProducts: JSON.parse(sessionStorage.getItem('filteredData')) || storeData
    },
    reducers: {
        filterProducts(state, action) {
            try {
                const filter = storeData.filter((product) => product.type === action.payload)
                state.filteredProducts = filter
                console.log(filter);
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem("filteredData", saveState)
            } catch (error) {
                return error
            }
        },
    }
})

export const { filterProducts } = productsSlice.actions
export default productsSlice.reducer