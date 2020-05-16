import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView } from 'react-native';
import { getUsers } from '../../api/userBasics';
import UserInfo from '../userInfo/userInfo';
import MainContext from '../context/mainContext';

export const UsersPage = () => {
    const [usersList,setUsersList] = useState([]);
    const {setSelectedUser,selectedUser} = useContext(MainContext);

    useEffect(() => {loadUsers()},[]);
    useEffect(() => {console.log(usersList)},[usersList.length]);

    const loadUsers = async() => {
        const allUsers = await getUsers();
        setUsersList(allUsers);
    }
    return (
      <SafeAreaView>
        {!selectedUser && <FlatList
            data={usersList}
            renderItem={({item}) => <Text onPress={() => setSelectedUser(item)}>{item.id + item.firstName}</Text>}
            keyExtractor={item => item.firstName + item.id}
        />}
        {
            selectedUser && <UserInfo user={selectedUser}/>
        }
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({

    userItem: {

    }
  });

  export default UsersPage;