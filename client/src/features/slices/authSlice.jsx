import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(sessionStorage.getItem('authUser')) || {
            name: '',
            password: '',
            image: '',
            authUser: false,
        },
        error: {
            name: null,
            password: null,
        },
    },
    reducers: {
        login(state, action) {
            const userId = action.payload
            const usernameValidation = /^[A-Za-z]{4,10}$/i.test(userId.name)
            const passwordValidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{4,10}$/i.test(userId.password)

            state.user = userId
            if (!usernameValidation) {
                state.user.authUser = false
                state.error.name = 'Username must have 4 to 10 characters'
            } else {
                state.error.name = null
            }
            
            if (!passwordValidation) {
                state.user.authUser = false
                state.error.password = 'Password must have 4 to 10 characters, a number and a special character'
            } else {
                state.error.password = null
            }
            
            if (usernameValidation && passwordValidation) {
                state.user.authUser = true
                const saveState = JSON.stringify(userId)
                sessionStorage.setItem('authUser', saveState)
            }
        },
        logout(state) {
            state.user = {
                name: '',
                password: '',
                image: '',
                authUser: false,
            }
            sessionStorage.clear()
        },
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer