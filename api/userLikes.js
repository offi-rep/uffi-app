import { baseApiInstance } from './apiConfig';

export const likeAction = (data,trgLiked) => (trgLiked) ?
      baseApiInstance.put('/matches',data) :
      baseApiInstance.post('/matches',data) 
            .then((response) => response.data?.data)
            .catch((error) => ({error: error, action:'likeAction'}));

// ,{headers: {userId: selectedUser?.id}}