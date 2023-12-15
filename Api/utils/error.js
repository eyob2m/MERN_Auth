export const erroeHandler = (staCode, message)=>{
    const error = new Error();
    error.statusCode = staCode;
    error.message = message
    return error
}