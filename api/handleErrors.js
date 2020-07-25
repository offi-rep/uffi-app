
export const handleError = (err,customError = '') => {
    console.error(err);
    return {
        error: customError.length > 0 ? customError : err
    };
}