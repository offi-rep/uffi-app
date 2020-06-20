import React from 'react';
import {StyleSheet,View,Text,SafeAreaView,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import UserPotentials from '../components/userOptions/userPotentials';
import UserMessages from '../components/userMessages/userMessages';
import UsersPage from '../components/users/usersPage';
import Header from '../components/header/header';
import { getConfiguration } from '../config/appConfig';
import UserSettings from '../components/userSettings/userSettings';
import Conversation from '../components/userMessages/conversation';

const colors = getConfiguration('colors');

const AuthenticatedStack = createStackNavigator();

const UserRoutes = props => {
    return <AuthenticatedStack.Navigator
        screenOptions={{
            headerTitle: <Header />,
            headerLeft: null,
            headerStyle: {
                backgroundColor: colors?.bgMainColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                overflow: 'visible'

            },
      }}>
        <AuthenticatedStack.Screen
            name="usersPage"
            component={UsersPage}
        />
        <AuthenticatedStack.Screen
            name="userSettings"
            component={UserSettings}
        />
        <AuthenticatedStack.Screen
            name="userPotentials"
            component={UserPotentials}
        />
        <AuthenticatedStack.Screen
            name="userMessages"
            component={UserMessages}
        />
        <AuthenticatedStack.Screen
            name="Conversation"
            component={Conversation}
        />
    </AuthenticatedStack.Navigator>
}

export default UserRoutes;