export const updateLoginToken = (data) =>{
    return ({
        type : 'SET_LOGIN-TOKEN',
        payload : data
    })
}