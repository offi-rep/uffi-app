import { baseApiInstance } from './apiConfig';
import { handleError } from './handleErrors';

// export const likeAction = (data) => baseApiInstance.post('/likes',data)
//       .then((response) => response.data?.data)
//       .catch((error) => handleError(error,'getUsers'))

export const likeAction = (data) => {
    console.log(data);
}