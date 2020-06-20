import { baseApiInstance } from './apiConfig';
import { handleError } from './handleErrors';

const subRoute = '/matches';

export const getUserMatches = (userId,userToken = null) => 
       baseApiInstance.get(subRoute,{headers: userToken ? {'userToken': userToken} : {'userId': userId}})
      .then((response) => response?.data?.data)
      .catch((error) => handleError(error,'getUserMatches'));