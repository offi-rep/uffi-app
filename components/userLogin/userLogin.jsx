import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView } from 'react-native';
import propTypes from 'prop-types';
import UserLoginInfo from './userLoginInfo';
import UserLoginSettings from './userLoginSettings';
import GoogleLogin from 'react-google-login';
import { login } from '../../api/userLogin';
import { creationUser,signUpUser } from '../../api/userBasics';
import { handleError } from '../../api/handleErrors';
import MainContext from '../context/mainContext';
import {isEmpty} from 'lodash'; 

const UserLogin = props => {
    const {setUserToken} = useContext(MainContext);

    const responseGoogle = async(data) => {
        console.log(data);
        const email = data?.profileObj?.email;
        if(!isEmpty(email)){
            const loginRes = await login(email);
            if(!loginRes.error){
                console.log(loginRes);
                if(loginRes){
                    // user already exists  
                    setUserToken(loginRes);           
                }else{
                    // creation phase
                    const conf = creationUser({name:data?.profileObj?.givenName,email:email,bodytype:'fat'});
                    console.log(conf);
                    try{
                        const signupResponse = await signUpUser(conf);
                        if(signupResponse){
                            console.log('signupResponse: ',signupResponse);
                            setUserToken(signupResponse); 
                        }
                    }
                    catch(err){
                        handleError(err, 'cannot create new user');
                    }
                }
            }
        }
    }
    return <View style={styles.nameWrapper}>
    <GoogleLogin
        clientId="365500493337-4r2bjpni6jmdbl0a7qdu88np00r0sdub.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
    </View>
}

const styles = StyleSheet.create({
   nameWrapper: {

   }
});
 
UserLogin.propTypes = {
 
}
export default UserLogin;