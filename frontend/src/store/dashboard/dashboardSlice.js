import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id: null,
        nombres: '',
        apellidos: '',
        email: '',
        type_user: '',
        haveError: null
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.id = payload.id;
            state.nombres = payload.nombres;
            state.apellidos = payload.apellidos;
            state.email = payload.email;
            state.type_user = payload.type_user;
        },
        setError: ( state, { payload } ) => {
            state.haveError = payload;
        }
    }
})

export const { login } = authSlice.actions;