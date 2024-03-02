import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: "checking",
        id: null,
        nombres: '',
        apellidos: '',
        email: '',
        type_user: '',
        haveNotification: {
            msg: '',
            type: ''
        }
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.id = payload.id;
            state.nombres = payload.nombres;
            state.apellidos = payload.apellidos;
            state.email = payload.email;
            state.type_user = payload.type_user;
        },
        setNotification: ( state, { payload } ) => {
            state.haveNotification = payload;
        },
        setNotNotification: ( state ) => {
            state.haveNotification = { msg: '', type: '' };
        },
        closeSession: ( state ) => {
            state.status = 'not-authenticated';
            state.id = null;
            state.nombres = '';
            state.apellidos = '';
            state.email = '';
            state.type_user = '';
            state.haveNotification = { msg: '', type: '' }
        }
    }
})

export const { login, setNotification, setNotNotification, closeSession } = authSlice.actions;