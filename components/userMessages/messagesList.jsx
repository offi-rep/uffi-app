import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView,ScrollView,Dimensions,ActivityIndicator } from 'react-native';
import { ListItem,Badge,Avatar,Image } from 'react-native-elements';
import styled from 'styled-components';
// import propTypes from 'prop-types';
import { firstCapital } from '../common/inputLabel';


const MessagesList = ({msgsList}) => {
    return <ScrollView contentContainerStyle={styles.msgsList}>
        {
         _.isEmpty(msgsList) ? <Text>No messages yet</Text> : 
         msgsList.map(row => (

            <View style={styles.msgRow} key={row.liked_user_id}>
                <View style = {styles.avatarWrapper}> 
                    <Image
                        blurRadius={6}
                        style={{width:80,height:80,borderRadius:10,zIndex: 10}}
                        source={{uri:'https://randomuser.me/api/portraits/men/41.jpg'}}
                        PlaceholderContent={<ActivityIndicator />}
                    />     
                    <Badge
                        status={false ? "success" : "error"}      // color based on online/offline status
                        value = "4"           // + number (if any unread messages)
                        containerStyle={{ position: 'absolute'}}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16,color:'#fff'}}>
                        {firstCapital(row.name)}
                    </Text>
                    <Text style={styles.lastMsg}>
                        {row.last_message?.substring(0,40)}
                    </Text>
                </View>
            </View>

          ))
        }
    </ScrollView>
}
 
const styles = StyleSheet.create({
   msgsList:{
    justifyContent:'center',
    backgroundColor: '#ccc',
    flex:1,
    margin: '1%',
    borderRadius: '5px'
   },
   msgRow:{
    margin: '1%',
    backgroundColor: '#ccc',
    borderRadius: 6,
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: '2%'
    // borderBottomLeftRadius: 40,
    // borderTopLeftRadius: 40
   },
   avatarWrapper:{

   },
   info:{
   },
   lastMsg:{
        color:'#fff',
        //textOverflow: 'ellipsis',
        overflow: 'hidden',
        height: '1.2em', 
        //whiteSpace: 'nowrap',
        flex:2
   }
});

// MessagesList.propTypes = {
//     msgsList: PropTypes.array.isRequired
// }
export default MessagesList;