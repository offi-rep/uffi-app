import React,{useState,useEffect,useContext} from 'react';
import {StyleSheet,View,Text,SafeAreaView,Button,TouchableOpacity } from 'react-native';
import { Icon,Badge } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import MainContext from '../context/mainContext';
import { getTotalUserUnreadMsgsCount } from '../../api/userMessages';

const Header = () => {
    const navigation = useNavigation();
    const {selectedUser,setSelectedUser} = useContext(MainContext);
    const [unreadMsgs,setUnreadMsgs] = useState(null);

    useEffect(() => {
        async () => {
            if(selectedUser){
                const unreadCount = await getTotalUserUnreadMsgsCount(selectedUser?.id);
                console.log('unreadCount: ',unreadCount);
                unreadCount && setUnreadMsgs(unreadCount);
            }
        }
    },[selectedUser?.id]);

    return <View style={{flexDirection: 'row',justifyContent: 'space-between',width:'100%',alignItems:'center',maxHeight: 65}}>
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
                    navigation.navigate('usersPage');
                    setSelectedUser(null);
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
                {unreadMsgs && <Badge
                    status="success"
                    value={unreadMsgs}
                    containerStyle={{ position: 'absolute',right:-5,top: -5}}
                />}
            </View></TouchableOpacity>
    </View>
}

export default Header;