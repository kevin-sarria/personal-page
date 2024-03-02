export const formatTechnologies = {
    onlyNames: ( data = [] ) => {
        let technologies = [];
        data?.map( obj => technologies = [...technologies, ` ${obj?.nombre_tecnologia}`] );
        return technologies.toString();
    },
}