import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { MainContextProvider } from './components/context/mainContext';
import UsersPage from './components/users/usersPage';

export const App = () => {
  const [selectedUser,setSelectedUser] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <MainContextProvider value ={{
        selectedUser: selectedUser,
        setSelectedUser: setSelectedUser
      }}>
        <Text style={styles.currentHeader}>Uffi</Text>
        <UsersPage />
      </MainContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2331',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentHeader: {
    color:'#fff',
    fontSize: 22
  },
});

export default App;