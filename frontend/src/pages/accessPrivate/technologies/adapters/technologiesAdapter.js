export const technologiesAdapter = (data = []) => {
    return data.map( obj => { 
        return {
            id: obj?.id,
            nombre: obj?.nombre,
            imagen: obj?.imagen
        }
    } );
}