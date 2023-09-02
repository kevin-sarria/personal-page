export const authSessionAdapter = (data = {}) => {
    if (!data) return false;
    return {
        id: data?.id,
        nombres: data?.nombres,
        apellidos: data?.apellidos,
        email: data?.email,
        type_user: data?.type_user,
    }
}
