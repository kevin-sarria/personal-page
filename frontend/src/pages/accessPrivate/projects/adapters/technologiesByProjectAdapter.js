export const technologiesByProjectAdapter = ( data = [] ) => {
    return data.map( obj => {
        return {
            id: obj?.id_tecnologia,
            nombre: obj?.nombre_tecnologia
        }
    } );
}