import axios from 'axios';
const API_CALL = 'http://localhost:5000/users';

var usersBasicApiInstance = axios.create({
    baseURL: API_CALL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
const handleError = (err,src = '') => {
    console.error(err)
    return null;
}
export const getUsers = () => fetch(API_CALL)
      .then((response) => response.json())
      .catch((error) => handleError(error,'getUsers'))

export const getUserInfo = (id) => usersBasicApiInstance.get(`${API_CALL}/${id}`)
      .then((response) => response.data)
      .catch((error) => handleError(error,'getUserInfo'))

// export const getUserImgs = (id) => usersBasicApiInstance.get(`${API_CALL}/${id}`)
//     .then((response) => response.data)
//     .catch((error) => handleError(error,'getUserInfo'))