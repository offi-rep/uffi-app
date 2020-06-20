import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView } from 'react-native';
import propTypes from 'prop-types';
import { getUserMessages,sendMessage } from '../../api/userMessages';
import MainContext from '../context/mainContext';
import useAxios from '../../api/useAxios';

 
const Message = ({srcId,trgId}) => {
    const {setAppErrors} = useContext(MainContext);
    useEffect(() => {
        //loadMessages();
        const {data} = useAxios('/messages');
        console.log(data);
    },[]);

    const loadMessages = async() => {
        const msgsResponse = await getUserMessages();
        if(msgsResponse.error){
            setAppErrors(like.error);
        }else{
            
        } 
    }
    const sendUserMessage = async() => {
        const sendMsg = await sendMessage({secondUserId:userId,message:message}));
        console;
    }
    return <View style={styles.nameWrapper}>
        <Text>Message</Text>
    </View>
}
 
const styles = StyleSheet.create({
   nameWrapper: {

   }
});
 
Message.propTypes = {
 
}
export default Message;