import { baseApiInstance } from './apiConfig';
import { handleError } from './handleErrors';

const subRoute = '/potentials';

export const getPotentials = (userId) => 
       baseApiInstance.get(subRoute,{headers: {'userId': userId}})
      .then((response) => response.data)
      .catch((error) => handleError(error,'getPotentials'));