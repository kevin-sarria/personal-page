export const projectAdapter = (data = []) => {
    return data.map( obj => {
        return {
            id: obj?.id,
            nombre: obj?.nombre,
            descripcion: obj?.descripcion,
            imagen: obj?.imagen,
            repositorio: obj?.repositorio,
            web: obj?.web,
            tecnologias: obj?.tecnologias
        }
    } )
}