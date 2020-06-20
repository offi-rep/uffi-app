import { baseApiInstance } from './apiConfig';
import { handleError } from './handleErrors';

export const getUserMessages = (userId) => 
       baseApiInstance.get('/messsages')
       .then((response) => response.data?.data)
       .catch((error) => ({error: error, action:'likeAction'}));


export const sendMessage = (data) => 
       baseApiInstance.post('/messsages',data)
       .then((response) => response.data?.data)
       .catch((error) => ({error: error, action:'likeAction'}));