import React,{useState,useContext,useEffect,useRef} from 'react';
import {StyleSheet,View,Text,TextInput,ScrollView } from 'react-native';
import propTypes from 'prop-types';
import { getUserMessages,sendMessage } from '../../api/userMessages';
import MainContext from '../context/mainContext';
import MsgItem from './messageItem';
import { Button } from 'react-native-elements'

const Conversation = ({route}) => {
    const {trgUser} = route.params;
    console.log('trgUser: ',trgUser);
    const {setAppErrors,selectedUser} = useContext(MainContext);
    const [pageMessages,setPageMessages] = useState([]);
    const [currentMessage,setCurrentMessage] = useState('');
    const [sendLoading,setSendLoading] = useState(false);
    const scrollViewRef = React.createRef();

    useEffect(() => {
        loadMessages();
    },[]);

    const loadMessages = async() => {
        const msgsResponse = await getUserMessages(trgUser?.liked_user_id);
        if(msgsResponse.error){
            setAppErrors(msgsResponse.error);
        }else{
            console.log(msgsResponse);
            setPageMessages(msgsResponse.reverse());
        } 
        setSendLoading(false);

    }
    const sendUserMessage = async() => {
        if(!_.isEmpty(currentMessage)){
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

    return <View style={styles.nameWrapper}>
        <View style={styles.userInfo}>
            <Text>{trgUser.name}</Text>
            <Text>{trgUser.age}</Text>
            <Text>{trgUser.location}</Text>
        </View>
        <ScrollView
            contentContainerStyle={styles.msgsListWrapper} 
            ref={scrollViewRef}
            //ref={(scrollView) => { this.scrollView = scrollView }}
            //onContentSizeChange={() => this.scrollViewRef.scrollToEnd({animated: true})}>
        >
            {
                pageMessages.map(msg => <MsgItem
                    key={msg.id}
                    avatar={null}
                    isRead={msg.is_read}
                    message={msg.message}
                    selfMsg = {msg.to_user_id == trgUser?.liked_user_id}
                />)
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
    </View>
}

const styles = StyleSheet.create({
   nameWrapper: {
    flex:1
   },
   userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around'
   },
   msgsListWrapper:{
    maxHeight: 300,
    padding: '2%'
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
   }
});

Conversation.propTypes = {
 
}
export default Conversation;