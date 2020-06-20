import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView,SectionList } from 'react-native';
import { getUsers } from '../../api/userBasics';
import MainContext from '../context/mainContext';
import { mainStyle } from '../mainStyle';
import UserPotentials from '../../api/userPotentials';
import UserSettings from '../userSettings/userSettings';

export const UsersPage = () => {
    const [usersList,setUsersList] = useState([]);
    const {setSelectedUser,selectedUser,setIsLoading} = useContext(MainContext);
    
    useEffect(() => {loadUsers()},[]);

    const loadUsers = async() => {
        setIsLoading(true);
        const allUsers = await getUsers();
        console.log(allUsers);
        setUsersList(allUsers);
        setIsLoading(false);
    }
    return (
      <SafeAreaView style = {[styles.users,mainStyle.mainStyle]}>
        <View style = {styles.usersList} >
        {!selectedUser && usersList?.map(usr => <Text 
                style={styles.userItem}
                onPress={() => setSelectedUser(usr)}
                key = {usr.name + usr.age + usr.id}
              >
              {`${usr.name}__${usr.id}`}
              </Text>)
        }</View>
        {
            selectedUser && <UserSettings />
        }
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({

    usersList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    list:{
      flexDirection: 'row'
    },
    userItem: {
      color:"#000",
      backgroundColor: 'green',
      width: 100,
      height: 50,
      padding: 4,
      margin: 4
    }
  });

  export default UsersPage;