import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [
        {   
            email: 'test@test.com',
            password: 'admin', 
            auth: localStorage.getItem('login') ? true : false,
        },
    ]
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.users = [...state.users, action.payload]
        },

        setLogout: (state, action) => {
            state.users = [...state.users, action.payload]
        },

        setNewUser: (state, action) => {
            state.users = [...state.users, action.payload]

            localStorage.setItem('users', JSON.stringify(state.users))
        }
    }
})

export const {  
    setLogin, 
    setLogout,
    setNewUser, 

} = loginSlice.actions;

export default loginSlice.reducer