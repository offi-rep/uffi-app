import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView,ScrollView,TouchableOpacity,ActivityIndicator } from 'react-native';
import { ListItem,Badge,Avatar,Image } from 'react-native-elements';
import { firstCapital } from '../common/inputLabel';
import {isEmpty} from 'lodash'; 

const MessagesList = ({msgsList,navigation}) => {
    console.log('msgsList: ',msgsList);
    
    return <ScrollView contentContainerStyle={styles.msgsList}>
        {
         isEmpty(msgsList) ? <Text>No messages yet</Text> : 
         msgsList.map(row => (
        <TouchableOpacity
            onPress = {() => navigation.navigate('conversation',{trgUser: row})}
            key={row.liked_user_id}
        >
            <View style={styles.msgRow}>
                <View style = {styles.avatarWrapper}> 
                    <Image
                        blurRadius={6}
                        style={{width:80,height:80,borderRadius:10,zIndex: 10}}
                        source={{uri:'https://randomuser.me/api/portraits/men/41.jpg'}}
                        PlaceholderContent={<ActivityIndicator />}
                    />     
                    <Badge
                        status={false ? "success" : "error"}     
                        value = "4"       
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
        </TouchableOpacity>
          ))
        }
    </ScrollView>
}
 
const styles = StyleSheet.create({
   msgsList:{
    justifyContent:'center',
    backgroundColor: '#ccc',
    margin: '1%',
    borderRadius: 5,
    alignItems: 'center',
    flex: 1
   },
   msgRow:{
    flexDirection:'row',
    margin: '1%',
    backgroundColor: '#ccc',
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#000',
    padding: '2%',
    // borderBottomLeftRadius: 40,
    // borderTopLeftRadius: 40
   },
   avatarWrapper:{

   },
   info:{
        marginLeft: '2%',
        height: '100%'
   },
   lastMsg:{
        color:'#fff',
        //textOverflow: 'ellipsis',
        overflow: 'hidden',
        height: '1.2em', 
        //whiteSpace: 'nowrap',
        flex:2,
   }
});

// MessagesList.propTypes = {
//     msgsList: PropTypes.array.isRequired
// }
export default MessagesList;