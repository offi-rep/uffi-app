import React,{useContext} from 'react';
import {StyleSheet,View,Text,SafeAreaView,Button,TouchableOpacity } from 'react-native';
import { Icon,Badge } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import MainContext from '../context/mainContext';

const Header = () => {
    const navigation = useNavigation();
    const {setSelectedUser} = useContext(MainContext);

    return <View style={{flexDirection: 'row',justifyContent: 'space-between',width:'100%',alignItems:'center'}}>
            <Icon
                name='address-card'
                type='font-awesome'
                color='#fff'
                size={24}
                onPress={() => navigation.navigate('userSettings')}
            /> 
            <Text onPress={() => navigation.navigate('userPotentials')}>
                Greetz
            </Text>
            <Button
                onPress={() => {
                    setSelectedUser(null);
                    navigation.navigate('usersPage');
                }}
                title="."
                color="black"
            />
   
            <TouchableOpacity onPress={() => navigation.navigate('userMessages')}>
                <View style={{width:30,height:30}} >
                <Icon
                    name='envelope'
                    type='font-awesome'
                    color='#fff'
                    size={24}
                />
                <Badge
                    status="success"
                    value="4"
                    containerStyle={{ position: 'absolute',right:-5,top: -5}}
                />
            </View></TouchableOpacity>
    </View>
}

export default Header;