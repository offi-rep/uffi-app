import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,ScrollView,SafeAreaView,Button } from 'react-native';
import propTypes from 'prop-types';
import MainContext from '../context/mainContext';

 
const UserSettingsPage = () => {
    const {userInfo,updateUserInfo} = useContext(MainContext);

    return <ScrollView contentContainerStyle={styles.nameWrapper}>
        <View style={{}}>
            <Text>{userInfo.looking_for}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text>{userInfo.ageMin}</Text>
            <Text>{userInfo.ageMax}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text>{userInfo.search_radius}</Text>
        </View>
        <Button title = "LOGOUT" />
        <Button title = "Delete User" />
    </ScrollView>
}
 
const styles = StyleSheet.create({
   nameWrapper: {

   }
});
 
UserSettingsPage.propTypes = {
    userSettings: propTypes.object.isRequired,
    setUserSettings: propTypes.func.isRequired
}
export default UserSettingsPage;