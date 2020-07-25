import { baseApiInstance } from './apiConfig';
import { handleError } from './handleErrors';

export const getUserMessages = (secondUser) => 
       baseApiInstance.get(`/messages/${secondUser}`)
       .then((response) => response.data?.data)
       .catch((error) => ({error: error, action:'getUserMessages'}));
       
export const getTotalUserUnreadMsgsCount = (id) => 
       baseApiInstance.get(`/messages/unread`)
       .then((response) => response.data?.data)
       .catch((error) => ({error: error, action:'getUnreadMsgsCount'}));

export const getUnreadMsgsCount = (id) => 
       baseApiInstance.get(`/messages/${id}?action=count`)
       .then((response) => response.data?.data)
       .catch((error) => ({error: error, action:'getUnreadMsgsCount'}));

export const sendMessage = (data) => 
       baseApiInstance.post('/messages',data)
       .then((response) => response.data?.data)
       .catch((error) => ({error: error, action:'sendMessage'}));