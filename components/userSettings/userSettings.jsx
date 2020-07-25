import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView,TouchableOpacity} from 'react-native';
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
import { updateUser } from '../../api/userBasics';
import { UserSettingsContextProvider } from '../context/userSettingsContext';
import {omit} from 'lodash';

const Tab = createBottomTabNavigator();

const UserSettings = props => {
    const {selectedUser} = useContext(MainContext);
    const baseUser = creationUser(selectedUser ?? {});
    const colors = getConfiguration('colors');
    const [globalSettings,setGlobalSettings] = useState(baseUser);
    const [updatedData,setUpdatedData] = useState({});

    console.log('===',globalSettings);

    useEffect(() => {
        console.log('baseUser: ',baseUser);
        setGlobalSettings(baseUser);
        return () => {
            console.log('exit settings');
            if(Object.keys(updatedData).length > 0){
                updateDBInfo();
            }
        }
    },[]);

    const updateUserFields = (label,value) => {
        if (label?.length > 0){
          const newSettings = {...globalSettings,[label]: value};          
          if(baseUser?.[label] !== value){
            setUpdatedData({...updatedData,[label]: value});
          }else{
            setUpdatedData(omit({...updatedData},label));
          }
          setGlobalSettings(newSettings);
        }else console.log('invalid user info updating : ', label,value);
    }

    const updateDBInfo = async() => {
        console.log('update : ',globalSettings);
        const updateRes = await updateUser(globalSettings);
        console.log(updateRes);
        if(updateRes?.error){
            console.log('update errors: ', updateRes.error);
        }
    }

    return <View style={styles.settingsWrapper}>
    <UserSettingsContextProvider value={{globalSettings,updateUserFields:updateUserFields}}>
    <Tab.Navigator tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: '#333',
    }}>
            <Tab.Screen
                name="Profile"
                component={!globalSettings ? Loader : UserKeysSettings}
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
                component={!globalSettings ? Loader : UserImagesPage}
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
                component={!globalSettings ? Loader : UserSettingsPage}
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
        </UserSettingsContextProvider>
    </View>
}

// bottom of info, settings,images
const styles = StyleSheet.create({
   settingsWrapper:{
    flex:1,
    
   },
   settingsLinks: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ccc'
   }
});
 
UserSettings.propTypes = {
 
}
export default UserSettings;