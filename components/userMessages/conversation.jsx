import React,{useState,useContext,useEffect,useRef} from 'react';
import {StyleSheet,View,Text,TextInput,ScrollView } from 'react-native';
import propTypes from 'prop-types';
import { getUserMessages,sendMessage } from '../../api/userMessages';
import MainContext from '../context/mainContext';
import MsgItem from './messageItem';
import { Button } from 'react-native-elements'
import {isEmpty} from 'lodash'; 

const Conversation = ({route}) => {
    const {trgUser} = route.params;
    console.log('trgUser: ',trgUser);
    const {setAppErrors,setIsLoading} = useContext(MainContext);
    const [pageMessages,setPageMessages] = useState([]);
    const [currentMessage,setCurrentMessage] = useState('');
    const [sendLoading,setSendLoading] = useState(false);
    const scrollViewRef = React.createRef();

    useEffect(() => {
        setIsLoading(true);
        loadMessages();
        setIsLoading(false);

    },[]);

    const loadMessages = async() => {
        const msgsResponse = await getUserMessages(trgUser?.liked_user_id);
        if(msgsResponse.error){
            setAppErrors(msgsResponse.error);
        }else{
            console.log(msgsResponse);
            setPageMessages(msgsResponse);
        } 
        sendLoading && setSendLoading(false);
    }
    const sendUserMessage = async() => {
        if(!isEmpty(currentMessage)){
            setSendLoading(true);
            const sendMsg = await sendMessage({secondUserId:trgUser?.liked_user_id,message:currentMessage});
            if(sendMsg.error){
                setAppErrors(msgsResponse.error);
                setSendLoading(false);

            }else{
                setCurrentMessage('');
                loadMessages();
            } 
        }
    }

    return <>
        <View style={styles.userInfo}>
            <Text>{trgUser.name}</Text>
            <Text>{trgUser.age}</Text>
            <Text>{trgUser.location}</Text>
        </View>
        <ScrollView
            contentContainerStyle={styles.msgsListWrapper} 
            ref={scrollViewRef}
         >
            {
                pageMessages?.length > 0 ? pageMessages.map(msg => <MsgItem
                    key={msg.id}
                    avatar={null}
                    isRead={msg.is_read}
                    message={msg.message}
                    selfMsg = {msg.to_user_id == trgUser?.liked_user_id}
                />) : trgUser?.liked_user_id && (
                    <View style={styles.emptyMsgs}><Text>Write something, dont be shy...</Text></View>
                )
            }
        </ScrollView>
        <View style={styles.writeArea}>
            <TextInput
                style={styles.textInput}
                onChangeText={setCurrentMessage}
                value={currentMessage}
                placeholder = 'Come on, write something...'
            />
            <Button style={styles.sendBtn} onPress={sendUserMessage} title='send' loading={sendLoading}/>
        </View>
    </>
}

const styles = StyleSheet.create({
   userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around'
   },
   msgsListWrapper:{
    padding: '2%',
    flexDirection: 'column-reverse'
   },
   writeArea:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '1%'
   },
   textInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    flex:4,
    padding: '1% 2%'
   },
   sendBtn:{
    flex:1
   },
   emptyMsgs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   }
});

Conversation.propTypes = {
 
}
export default Conversation;