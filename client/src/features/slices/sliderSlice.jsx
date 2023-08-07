import { createSlice } from '@reduxjs/toolkit'
import { sliderData } from '../../assets/data/dummyData';

// "initialState" === "state"

export const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        value: 0,
        length: sliderData.length,
    },
    reducers: {
        nextSlide(state, action) {
            console.log('action', action.payload);
            console.log('state', state);
            state.value = action.payload > state.length - 1 ? 0 : action.payload;
        },
        prevSlide(state, action) {
            state.value = action.payload < 0 ? state.length - 1 : action.payload
        },
        dotSlide(state, action) {
            state.value = action.payload
            console.log('dot', action.payload)
        },
    },
})

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions
export default sliderSlice.reducer