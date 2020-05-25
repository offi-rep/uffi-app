import { baseApiInstance } from './apiConfig';
import { handleError } from './handleErrors';


export const getUsers = () => baseApiInstance.get('/users')
      .then((response) => response.data?.data)
      .catch((error) => handleError(error,'getUsers'))

export const getUserInfo = (id) => baseApiInstance.get(`/users/${id}`)
      .then((response) => response.data)
      .catch((error) => handleError(error,'getUserInfo'))

// export const getUserImgs = (id) => usersBasicApiInstance.get(`${API_CALL}/${id}`)
//     .then((response) => response.data)
//     .catch((error) => handleError(error,'getUserInfo'))