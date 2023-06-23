export const UseFetch = ({ data = {} }) => {

    const login = async() => {

        const url = import.meta.env.VITE_BACKEND_URL;

        if( Object.entries(data).length < 1 ) {
            return;
        }

        const datos = new FormData(data);

        const resp = await fetch( url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: datos
        }).then( result => result.json() );

        return resp;

    }

  return {
    login,
  }

}
