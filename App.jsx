import React,{useState,useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View,Button,SafeAreaView} from 'react-native';
import { MainContextProvider } from './components/context/mainContext';
import Loader from './components/common/loader';
import UserRoutes from './routes/userRoutes';
import UnAuthRoutes from './routes/unAuthRoutes';
import io from 'socket.io-client';
import MainError from './components/errorHandling/mainError';
import Wrapper from './components/common/wrapper';
import { setAuthHeader,setTokenHeader } from './api/apiConfig';

//const socket = io.connect('https://uffi-heroku.herokuapp.com');

export const App = () => {
  const [selectedUser,setSelectedUser] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [userToken,setUserToken] = useState(null);
  const [appErrors,setAppErrors] = useState(null);
 
  useEffect(() => {
    selectedUser?.id && setAuthHeader(selectedUser?.id);
  },[selectedUser?.id]);

  useEffect(() => {
    userToken && setTokenHeader(userToken)
  },[userToken]);

  useEffect(() => {
    // socket.on('user-signed-in', (data) => {
    //   console.log('Socket connected, message = ',data?.message);
    // });
    // return () => {
    //   socket.on('disconnect', () => {
    //     console.log('socket disconnected');
    //   });
    // }
  },[]);

  return (
    <MainContextProvider value ={{
      selectedUser: selectedUser,
      setSelectedUser: setSelectedUser,
      setIsLoading: setIsLoading,
      userToken:userToken,
      setUserToken:setUserToken,
      appErrors: appErrors,
      setAppErrors: setAppErrors
    }}>     
    <View style={{ flex: 1 }}>
      <NavigationContainer fallback={<Text>Loading...</Text>}>
      {
          !userToken ? <UserRoutes /> : <UnAuthRoutes />
      }
      </NavigationContainer>
    </View>
      {/* {isLoading && <Wrapper Component = {Loader}/>} 
      {appErrors && <Wrapper Component={() => <MainError errors={appErrors} />} />} */}
    </MainContextProvider> 
  )
}

export default App;