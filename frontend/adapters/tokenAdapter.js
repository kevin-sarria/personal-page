export const tokenAdapter = (data = {}) => {
    if(!data) return false;

    return {
        token: data?.token
    }

}