import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserLogin from '../components/userLogin/userLogin';

const Stack = createStackNavigator();

const UnAuthRoutes = props => {
    return <Stack.Navigator
        initialRouteName="signIn"
        screenOptions={{ gestureEnabled: false }}
    >
    <Stack.Screen
        name="signIn"
        component={UserLogin}
    />
    </Stack.Navigator>
}

export default UnAuthRoutes;