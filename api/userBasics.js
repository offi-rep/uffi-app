import React from 'react';
import { baseApiInstance } from './apiConfig';
import { handleError } from './handleErrors';
import PropTypes from 'prop-types';


export const getUsers = () => baseApiInstance.get('/users')
      .then((response) => response.data?.data)
      .catch((error) => handleError(error,'getUsers'))

export const getUserInfo = (id) => baseApiInstance.get(`/users/${id}`)
      .then((response) => response.data)
      .catch((error) => handleError(error,'getUserInfo'))

export const signUpUser = (userDetails) => baseApiInstance.post('/signup',userDetails)
      .then((response) => response?.data?.data)
      .catch((error) => handleError(error,'signup'))

export const creationUser = ({
      name='',age = 25,gender = '',location = '',occupation = '',height = 189,bodytype = '',education = '',freetxt = '',
      current_location = {lat: 13234,long: 14423},
      crushed_sentence = '', email = '', looking_for = '', search_radius = 50, age_min = 20, age_max = 40
}) => ({
      name,age,gender,location,occupation,height,bodytype,
      education,freetxt,current_location,
      crushed_sentence, email, looking_for, search_radius, age_min, age_max
});

creationUser.propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      occupation: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired, 
      bodytype: PropTypes.string.isRequired,
      currentLocation: PropTypes.object.isRequired,
      education:PropTypes.string.isRequired,
      freetxt: PropTypes.string.isRequired,
      crushed_sentence: PropTypes.string.isRequired,
      email:PropTypes.string.isRequired,
      looking_for:PropTypes.string.isRequired,
      search_radius:PropTypes.string.isRequired,
      age_min:PropTypes.string.isRequired,
      age_max :PropTypes.string.isRequired
}

// export const getUserImgs = (id) => usersBasicApiInstance.get(`${API_CALL}/${id}`)
//     .then((response) => response.data)
//     .catch((error) => handleError(error,'getUserInfo'))