import { baseApiInstance } from './apiConfig';
import { handleError } from './handleErrors';

export const getUserMessages = (secondUser) => 
       baseApiInstance.get(`/messages/${secondUser}`)
       .then((response) => response.data?.data)
       .catch((error) => ({error: error, action:'likeAction'}));


export const sendMessage = (data) => 
       baseApiInstance.post('/messages',data)
       .then((response) => response.data?.data)
       .catch((error) => ({error: error, action:'likeAction'}));