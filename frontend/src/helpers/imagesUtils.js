import { getEnvVariables } from "./getEnvVariables";

const { VITE_BACKEND_URL } = getEnvVariables();

export const imageUtils = {
    getUrlImage: ( urlImage = '' ) => { return `${VITE_BACKEND_URL}${urlImage}` }
}