import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';
import { MainContextProvider } from './components/context/mainContext';
import UsersPage from './components/users/usersPage';
import {Header} from 'react-native-elements';
import Loader from './components/common/loader';

export const App = () => {
  const [selectedUser,setSelectedUser] = useState(null);
  const [isLoading,setIsLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <MainContextProvider value ={{
        selectedUser: selectedUser,
        setSelectedUser: setSelectedUser,
        setIsLoading: setIsLoading
      }}>
      {/* <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'UFFI', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        containerStyle={{
          width: '100%',
          justifyContent: 'space-around',

        }}
      /> */}
        <UsersPage />
        {isLoading && <Loader />}
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
});

export default App;