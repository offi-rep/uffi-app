import React,{useState,useContext,useEffect,useRef} from 'react';
import MainContext from '../context/mainContext';
import {SafeAreaView,View,Text,StyleSheet,ScrollView,ActivityIndicator } from 'react-native';
import MessagesList from './messagesList';
import CircleMatches from './circleMatches';
import { getUserMatches } from '../../api/userMatches';
import propTypes from 'prop-types';
import {isEmpty} from 'lodash'; 

const UserMessages = ({ navigation }) => {
  const {selectedUser,setIsLoading} = useContext(MainContext);
  const [matchesList,setMatchesList] = useState([]);
  const [msgsList,setMsgsList] = useState([]);
  
  useEffect(() => {getMatches();},[]);

  const getMatches = async () => {
    setIsLoading(true);
    const data = await getUserMatches(selectedUser?.id);
    console.log('getUserMatches: ',data);
    if(!isEmpty(data)){
      const filteredMsgs = [],filteredMatches = [];
      data.forEach((t) => (t.last_message ? filteredMsgs : filteredMatches).push(t));
      setMatchesList(filteredMatches);
      setMsgsList(filteredMsgs);
      console.log('user Matches: ',filteredMatches);
      console.log('user Msgs: ',filteredMsgs);
    }
    setIsLoading(false);
  }
      return <SafeAreaView style={{flex:1}}>
          <CircleMatches matchesList={matchesList} navigation={navigation}/>
          <View style={{flex:5}}>
            <MessagesList msgsList={msgsList} navigation={navigation}/>
          </View>
      </SafeAreaView>
}
  
UserMessages.propTypes = {
 
}

export default UserMessages;