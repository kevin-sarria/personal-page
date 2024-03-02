import { technologiesAdapter } from "../pages";
import { projectAdapter } from "../pages/accessPrivate/projects/adapters";
import { callApi } from "./callApi";


export const searchTechnologies = async() => {

    try {
        
        const query = await callApi.get('/technologies');
        const { data } = query;
        const dataFormatted = technologiesAdapter(data);
        return dataFormatted;

    } catch (error) {
        return error?.response?.data;
    }

}

export const saveTechnology = async( dataInput = {} ) => {

    if( !dataInput ) false;

    try {

        const formData = new FormData;
        for (const key in dataInput) {
            formData.append(key, dataInput[key]);
        }

        const query = await callApi.post('/register-technology', formData);
        const { data } = query;
        const dataFormatted = technologiesAdapter([data]);
        return dataFormatted[0];

    } catch(error) {
        return error?.response?.data;
    }
}

export const editTechnology = async( dataInput ) => {

    if( !dataInput ) false;

    try {

        const formData = new FormData;
        for (const key in dataInput) {
            formData.append( key, dataInput[key] );
        }

        const query = await callApi.post('/update-technology', formData);
        const { data } = query;
        const dataFormatted = technologiesAdapter([data]);
        return dataFormatted[0];

    } catch(error) {
        return error?.response?.data;
    }
}

export const deleteTechnology = async( id ) => {

    if( !id ) false;

    const formData = new FormData;
    formData.append('id', id);

    try {
        const query = await callApi.post('/delete-technology', formData);
        const { data } = query;
        return data;

    } catch(error) {
        return error?.response?.data;
    }
}

export const searchProjects = async() => {

    try {
        
        const query = await callApi.get('/projects');
        const { data } = query;
        const dataFormatted = projectAdapter(data);
        return dataFormatted;

    } catch (error) {
        return error?.response?.data;
    }

}

export const saveProject = async( dataInput = {} ) => {

    if( !dataInput ) false;

    try {

        const formData = new FormData;
        for (const key in dataInput) {
            formData.append(key, dataInput[key]);
        }

        const query = await callApi.post('/register-project', formData);
        const { data } = query;
        const dataFormatted = projectAdapter([data]);
        return dataFormatted[0];

    } catch(error) {
        return error?.response?.data;
    }
}

export const editProject = async( dataInput ) => {

    if( !dataInput ) false;

    try {

        const formData = new FormData;
        for (const key in dataInput) {
            formData.append( key, dataInput[key] );
        }

        const query = await callApi.post('/update-project', formData);
        const { data } = query;
        const dataFormatted = projectAdapter([data]);
        return dataFormatted[0];

    } catch(error) {
        return error?.response?.data;
    }
}

export const deleteProject = async( id ) => {

    if( !id ) false;

    const formData = new FormData;
    formData.append('id', id);

    try {
        const query = await callApi.post('/delete-project', formData);
        const { data } = query;
        return data;

    } catch(error) {
        return error?.response?.data;
    }
}