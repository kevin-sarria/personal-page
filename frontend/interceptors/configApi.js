import axios from "axios";
import { getEnvVariables } from '../helpers';
import { localSpace } from "./localSpace";

const { VITE_API_URL } = getEnvVariables();

export const configApi = axios.create({
    baseURL: VITE_API_URL
});

// Se configuran los interceptores en axios para que se puedan enviar datos como el token
configApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'Authorization': "Bearer " + localSpace.get('token')
    }

    return config;

} );