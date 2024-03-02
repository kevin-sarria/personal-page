import { getUser, localSpace, renewUser } from '../../interceptors';
import { closeSession, login, setNotNotification, setNotification } from "./authSlice";

export const startingLogin = (dataInput = {}) => {
    return async(dispatch) => {

        if(!dataInput) return dispatch(setNotification({ msg: 'Ha ocurrido un error al iniciar sesion', type: 'error' }));

        try {
            const user = await getUser(dataInput);
            
            if( user?.type === 'error' ) {
                dispatch(setNotification(user));
                setTimeout( () => {
                    dispatch(setNotNotification());
                }, 1000 )
                return;
            }

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
            const user = await renewUser();

            if( user?.type === 'error' ) {
                dispatch(setNotification(user));
                dispatch(closeSession());
                setTimeout( () => {
                    localSpace.removeAll();
                    dispatch(setNotNotification());
                }, 2000 );
                return;
            }

            return dispatch(login(user));

        } catch (error) {
            throw new Error(error);
        }
    }
}