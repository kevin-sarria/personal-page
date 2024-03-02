import { loading, loadData, haveNotification, haveNotNotification, loadNewData, setNewData, deleteData } from "./dashboardSlice";
import { deleteProject, deleteTechnology, editProject, editTechnology, saveProject, saveTechnology, searchProjects, searchTechnologies } from "../../interceptors";

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

        const query = await saveTechnology(dataInput);

        if( query?.type === 'error' ) {
            dispatch(haveNotification(query));
            setTimeout( () => {
                dispatch(haveNotNotification());
            }, 1000 )
            return null;
        }

        return dispatch(loadNewData(query));

    }
}

export const editingTechnology = ( dataInput = {}, dataOld ) => {
    return async(dispatch) => {

        dispatch(loading());

        const query = await editTechnology(dataInput);

        if( query?.type === 'error' ) {
            dispatch(haveNotification(query));
            setTimeout( () => {
                dispatch(haveNotNotification());
            }, 1000 )
            return;
        }

        let dataFormatted = dataOld.filter( obj => obj.id !== dataInput?.id );

        dataFormatted = [ query, ...dataFormatted ]

        return dispatch(setNewData(dataFormatted));
    }
}

export const deletingTechnology = ( dataInput = {}, dataOld ) => {
    return async(dispatch) => {

        dispatch(loading());

        const query = await deleteTechnology(dataInput?.id);

        if( query?.type === 'error' ) {
            dispatch(haveNotification(query));
            setTimeout( () => {
                dispatch(haveNotNotification());
            }, 1000 )
            return;
        } else if( query?.type === 'success' ) {
            dispatch(haveNotification(query));
            setTimeout( () => {
                dispatch(haveNotNotification());
            }, 1000 )
        }
        
        const dataFormatted = dataOld.filter( obj => obj.id !== dataInput?.id );

        return dispatch(deleteData(dataFormatted));
    }
}

export const searchingProjects = () => {
    return async(dispatch) => {

        dispatch(loading());

        try {

            const query = await searchProjects();
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

export const savingNewProject = ( dataInput = {} ) => {
    return async(dispatch) => {

        dispatch(loading());

        const query = await saveProject(dataInput);

        if( query?.type === 'error' ) {
            dispatch(haveNotification(query));
            setTimeout( () => {
                dispatch(haveNotNotification());
            }, 1000 )
            return null;
        }

        return dispatch(loadNewData(query));

    }
}

export const editingProject = ( dataInput = {}, dataOld ) => {
    return async(dispatch) => {

        dispatch(loading());

        const query = await editProject(dataInput);

        if( query?.type === 'error' ) {
            dispatch(haveNotification(query));
            setTimeout( () => {
                dispatch(haveNotNotification());
            }, 1000 )
            return;
        }

        let dataFormatted = dataOld.filter( obj => obj.id !== dataInput?.id );

        dataFormatted = [ query, ...dataFormatted ];

        return dispatch(setNewData(dataFormatted));
    }
}

export const deletingProject = ( dataInput = {}, dataOld ) => {
    return async(dispatch) => {

        dispatch(loading());

        const query = await deleteProject(dataInput?.id);

        if( query?.type === 'error' ) {
            dispatch(haveNotification(query));
            setTimeout( () => {
                dispatch(haveNotNotification());
            }, 1000 )
            return;
        } else if( query?.type === 'success' ) {
            dispatch(haveNotification(query));
            setTimeout( () => {
                dispatch(haveNotNotification());
            }, 1000 )
        }
        
        const dataFormatted = dataOld.filter( obj => obj.id !== dataInput?.id );

        return dispatch(deleteData(dataFormatted));
    }
}

export const searchAllProjectsAndAllTechnologies = () => {
    return async(dispatch) => {

        dispatch(loading());

        const allTechnologies = await searchTechnologies();
        const allProjects = await searchProjects();

        if( allTechnologies?.type === 'error' || allProjects?.type ==='error' ) {
            dispatch(haveNotification(allTechnologies || allProjects));
            setTimeout( () => {
                dispatch(haveNotNotification());
            }, 1000 )
            return;
        }

        return dispatch(loadData({ allTechnologies, allProjects }));

    }
}