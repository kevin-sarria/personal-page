import { authSessionAdapter } from "../src/pages/accessPublic/auth/";
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
        console.log(error);
    }

}