import { getEnvVariables } from "../../../helpers";

const url = getEnvVariables;

export const startingLogin = (dataInput = {}) => {
    return async(dispatch) => {

        if(!dataInput) return dispatch({ msg: 'Ha ocurrido un error al iniciar sesion', type: 'error' });



    }
}