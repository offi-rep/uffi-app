import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView } from 'react-native';
import propTypes from 'prop-types';
import { creationUser } from '../../api/userBasics';
import { Input,Icon } from 'react-native-elements';
import MainContext from '../context/mainContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getConfiguration } from '../../config/appConfig';
import UserSettingsPage from './userSettingsPage';
import UserKeysSettings from './userKeysSettings';
import Loader from '../common/loader';
import UserImagesPage from '../userInfo/userImagesPage';

const Tab = createBottomTabNavigator();

const UserSettings = props => {
    const {selectedUser,updateUserInfo,userInfo} = useContext(MainContext);
    const colors = getConfiguration('colors');

    console.log('UserSettings_selectedUser ',selectedUser);

    useEffect(() => {
        const temp = creationUser(selectedUser);
        console.log('temp: ',temp);
        updateUserInfo(temp);
    },[selectedUser?.id]);

    const updateFields = (label,value) => {
        const newSettings = {...userInfo,[label]: value};
        console.log(newSettings);
        updateUserInfo(newSettings);
    }

    return <Tab.Navigator
                tabBarOptions={{activeTintColor: '#e91e63',inactiveTintColor: '#333',}}
            >
            <Tab.Screen
                name="Profile"
                component={!userInfo ? () => <Loader /> : UserKeysSettings}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused,color, size }) => (
                        <Icon
                            name='user-secret'
                            type='font-awesome'
                            color={focused ? colors.bgMainColor : '#000'}
                            size={20}
                    />
                ),
            }}
            />
            <Tab.Screen
                name="Images"
                component={!userInfo ? () => <Loader /> : UserImagesPage}
                options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused,color, size }) => (
                            <Icon
                                name='address-book-o'
                                type='font-awesome'
                                color={focused ? colors.bgMainColor : '#000'}
                                size={20}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={!userInfo ? ()=> <Loader /> : UserSettingsPage}
                options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused,color, size }) => (
                            <Icon
                                name='gears'
                                type='font-awesome'
                                color={focused ? colors.bgMainColor : '#000'}
                                size={20}
                        />
                    ),
                }}
      />
        </Tab.Navigator>
}

// bottom of info, settings,images
const styles = StyleSheet.create({
   nameWrapper: {
    
   }
});
 
UserSettings.propTypes = {
 
}
export default UserSettings;