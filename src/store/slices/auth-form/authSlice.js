import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // checking, not-authenticated, authenticated
        displayName: 'Jeison Aranguren',
        email: 'jemax@gmail.com',
        password: '123456',
    },
    reducers: {
        login: (state,{ payload }) => {
            state.status = 'authenticated'; 
            state.email =  payload.email;
        },
        logout: (state ) => {
            state.status = 'not-authenticated';
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
        validationErrors: (state,{payload}) => {
            state.errors = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, validationErrors } = authSlice.actions;