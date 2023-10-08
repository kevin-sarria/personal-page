import { getUser } from '../../interceptors';
import { closeSession, login } from "./dashboardSlice";

export const startingLogin = (dataInput = {}) => {
    return async(dispatch) => {

        if(!dataInput) return dispatch({ msg: 'Ha ocurrido un error al iniciar sesion', type: 'error' });

        try {
            const user = await getUser(dataInput);
            return dispatch(login(user));
        } catch (error) {
            console.log(error);
        }

    }
}

export const closingSession = () => {
    return async( dispatch ) => {
        dispatch(closeSession());
    }
}

export const validatingSession = () => {
    return async( dispatch ) => {
        
        try {
            // Ask user info to save in global state with redux
            const user = await getUser();

            dispatch(login(user));

        } catch (error) {
            throw new Error(error);
        }
    }
}