import axios from 'axios';
const API_CALL = 'https://uffi-heroku.herokuapp.com';

export const baseApiInstance = axios.create({
    baseURL: API_CALL,
    timeout: 5000
});
