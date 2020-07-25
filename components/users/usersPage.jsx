import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView  } from 'react-native';
import { getUsers } from '../../api/userBasics';
import MainContext from '../context/mainContext';
import UserPotentials from '../../api/userPotentials';
import UserSettings from '../userSettings/userSettings';
import { getConfiguration,getPageDimensions } from '../../config/appConfig';
//const colors = getConfiguration('colors');
const {maxHeight} = getConfiguration('style');
import { useNavigation } from '@react-navigation/native';

export const UsersPage = () => {
    const [usersList,setUsersList] = useState([]);
    const {setSelectedUser,selectedUser,setIsLoading} = useContext(MainContext);
    const navigation = useNavigation();

    useEffect(() => {

      loadUsers();
    },[]);

    const loadUsers = async() => {
        setIsLoading(true);
        const allUsers = await getUsers();
        !allUsers.error && setUsersList(allUsers);
        setIsLoading(false);
    }
    return (
      <SafeAreaView style = {styles.users}>
        <View style = {styles.usersList} >
        {!selectedUser && usersList?.map(usr => <Text 
                style={styles.userItem}
                onPress={() => {
                  console.log('select - ',usr);
                  setSelectedUser(usr);
                  navigation.navigate('userSettings');
                }}
                key = {usr.name + usr.age + usr.id}
              >
              {`${usr.name}__${usr.id}`}
              </Text>)
        }</View>

      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    users:{
      flex:1
    },
    usersList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: 'rgb(238, 238, 238)',
      flex:1,
      justifyContent:'center',
      maxHeight: maxHeight,
      overflow: 'scroll',
      alignItems: 'center'
    },
    list:{
      flexDirection: 'row'
    },
    userItem: {
      color:"#000",
      backgroundColor: 'rgb(160, 0, 69)',
      width: 100,
      height: 50,
      padding: 4,
      margin: 4
    }
  });

  export default UsersPage;