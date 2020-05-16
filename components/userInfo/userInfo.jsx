import React,{useState,useEffect,useContext} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Button,SafeAreaView} from 'react-native';
import { getUserInfo } from '../../api/userBasics';
import TextInputLabel from '../common/textInputLabel';
import UserImages from './userImages';
import _ from 'lodash';
import MainContext from '../context/mainContext';
import UserKeysProfile from './userKeysProfile';

const UserInfo = ({user}) => {
    const [userInfo,setUserInfo] = useState(null);
    const {setSelectedUser,selectedUser} = useContext(MainContext);
     
    // useEffect(() => {
    //     selectedUser ? loadUserInfo() : setUserInfo(null)
    //  },[selectedUser]);

    // const loadUserInfo = async() => {
    //     const info = await getUserInfo(selectedUser);
    //     setUserInfo(info);
    // }

    return <SafeAreaView style={styles.userInfoPage}>
        <UserImages />
        <UserKeysProfile/>
        <Button title="<" onPress={() => setSelectedUser(null)}/></SafeAreaView >
}

const styles = StyleSheet.create({
    userInfoPage: {
        
    }
});

UserInfo.propTypes = {
    user:
     PropTypes.object
}

export default UserInfo
