import { baseApiInstance } from './apiConfig';
import { handleError } from './handleErrors';

export const getUserImages = () => baseApiInstance.get('/images')
      .then((res) => res?.data?.data)
      .catch((error) => handleError(error,'getUserImages'));


export const uploadImages = ({data}) => baseApiInstance.post('/images',data)
      .then((res) => res?.data?.data)
      .catch((error) => handleError(error,'uploadImages'));