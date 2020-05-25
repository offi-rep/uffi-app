import React,{useState,useEffect,useContext} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Button,SafeAreaView} from 'react-native';
import { getUserInfo } from '../../api/userBasics';
import _ from 'lodash';
import MainContext from '../context/mainContext';
import UserKeysProfile from './userKeysProfile';

const UserInfo = ({user}) => {
    console.log(user);     
    return <SafeAreaView style={styles.userInfoPage}>
        <UserKeysProfile userInfo={user}/>
    </SafeAreaView >
}

const styles = StyleSheet.create({
    userInfoPage: {
        
    }
});

UserInfo.propTypes = {
    user: PropTypes.object
}

export default UserInfo
