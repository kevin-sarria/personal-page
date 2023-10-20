import { loading, loadData, haveNotification, haveNotNotification, loadNewData, setNewData, deleteData } from "./dashboardSlice";
import { editTechnology, saveTechnology, searchTechnologies } from "../../interceptors";

export const searchingTechnologies = () => {
    return async(dispatch) => {

        dispatch(loading());

        try {

            const query = await searchTechnologies();
            if( !query ) {
                dispatch(haveNotification(query));
                setTimeout( () => {
                    dispatch(haveNotNotification());
                }, 1000 )
            }

            return dispatch(loadData(query));
    
        } catch(error) {
            console.log(error);
        }
    }
}

export const savingNewTechnology = ( dataInput = {} ) => {
    return async(dispatch) => {

        dispatch(loading());

        try {

            const query = await saveTechnology(dataInput);

            if( !query ) {
                console.log(query);
                dispatch(haveNotification(query));
                setTimeout( () => {
                    dispatch(haveNotNotification());
                }, 1000 )
            }

            return dispatch(loadNewData(query));

        } catch(error) {
            console.error(error);
        }

    }
}

export const editingTechnology = ( dataInput = {}, dataOld ) => {
    return async(dispatch) => {

        dispatch(loading());

        try {

            const query = await editTechnology(dataInput);

            if( !query ) {
                dispatch(haveNotification(query));
                setTimeout( () => {
                    dispatch(haveNotNotification());
                }, 1000 )
            }

            let dataFormatted = dataOld.filter( obj => obj.id !== dataInput?.id );

            dataFormatted = [ query, ...dataFormatted ]

            return dispatch(setNewData(dataFormatted));

        } catch(error) {
            console.error(error);
        }

    }
}

export const deletingTechnology = ( dataInput = {}, dataOld ) => {
    return async(dispatch) => {

        dispatch(loading());

        try {

            const query = await editTechnology(dataInput?.id);

            if( !query ) {
                dispatch(haveNotification(query));
                setTimeout( () => {
                    dispatch(haveNotNotification());
                }, 1000 )
            }

            dispatch(haveNotification(query));
            setTimeout( () => {
                dispatch(haveNotNotification());
            }, 1000 );

            const dataFormatted = dataOld.filter( obj => obj.id !== dataInput?.id );

            return dispatch(deleteData(dataFormatted));

        } catch(error) {
            console.error(error);
        }

    }
}