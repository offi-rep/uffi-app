import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView } from 'react-native';
import { getUsers } from '../../api/userBasics';
import UserInfo from '../userInfo/userInfo';
import MainContext from '../context/mainContext';
import UserOptions from '../userOptions/userOptions';

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
      <SafeAreaView style={styles.users}>
        {!selectedUser && <FlatList
            data={usersList}
            renderItem={({item}) => <Text 
              style={styles.userItem}
              onPress={() => setSelectedUser(item)}
            >{`${item.name}__${item.age}`}
            </Text>}
            keyExtractor={item => item.name + item.age}
        />}
        {
            selectedUser && <UserOptions user = {selectedUser}/> //<UserInfo user={selectedUser}/>
        }
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    users: {
      width: '90%',
      justifyContent: 'center'
    },
    userItem: {
      color:"#fff"
    }
  });

  export default UsersPage;