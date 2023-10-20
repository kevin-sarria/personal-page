import { authSessionAdapter } from "../pages/accessPublic/auth/";
import { callApi } from "./callApi"
import { localSpace } from "./localSpace";

export const getUser = async(dataInput = {}) => {

    if( !dataInput ) return false;

    try {
        
        const formData = new FormData();

        for (const key in dataInput) {
            formData.append( key, dataInput[key] );
        }

        const query = await callApi.post('/login', formData);
        const { data } = query;
        localSpace.set('token', data?.Token);
        const dataFormatted = authSessionAdapter(data);
        return dataFormatted;


    } catch (error) {
        return error?.response?.data;
    }

}

export const renewUser = async() => {

    try {
        const query = await callApi.get('/auth/me');
        const { data } = query;
        const dataFormatted = authSessionAdapter(data);
        return dataFormatted;
    } catch (error) {
        return error?.response?.data;
    }

}