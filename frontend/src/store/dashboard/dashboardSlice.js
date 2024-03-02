import { createSlice } from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        data: [],
        isLoading: false,
        haveNotification: {
            msg: '',
            type: ''
        }
    },
    reducers: {
        loading: ( state ) => {
            state.isLoading = true;
        },
        loadData: ( state, { payload } ) => {
            state.isLoading = false;
            state.data = payload;
        },
        loadNewData: ( state, { payload } ) => {
            state.isLoading = false;
            state.data = [ ...state.data, payload ];
        },
        setNewData: ( state, { payload } ) => {
            state.isLoading = false;
            state.data = payload;
        },
        deleteData: ( state, { payload } ) => {
            state.isLoading = false;
            state.data = payload;
        },
        haveNotification: ( state, { payload } ) => {
            state.isLoading = false;
            state.haveNotification = payload;
        },
        haveNotNotification: ( state ) => {
            state.isLoading = false;
            state.haveNotification = { msg: '', type: '' };
        }
    }
})

export const { loading, loadData, loadNewData, setNewData, deleteData, haveNotification, haveNotNotification } = dashboardSlice.actions;