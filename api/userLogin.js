import { baseApiInstance } from './apiConfig';
import { handleError } from './handleErrors';

export const login = (_email) => baseApiInstance.post('/auth',{email: _email})
      .then((res) => res?.data?.data)
      .catch((error) => handleError(error,'auth'))
