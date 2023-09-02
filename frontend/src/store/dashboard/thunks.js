import { getUser } from "../../../interceptors";
import { login } from "./dashboardSlice";

export const startingLogin = (dataInput = {}) => {
    return async(dispatch) => {

        if(!dataInput) return dispatch({ msg: 'Ha ocurrido un error al iniciar sesion', type: 'error' });

        try {
            const user = await getUser(dataInput);
            const stateGlobal = { ...user };
            return dispatch(login(stateGlobal));
        } catch (error) {
            console.log(error);
        }

    }
}