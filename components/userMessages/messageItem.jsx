import React from 'react';
import {StyleSheet,View,Text,ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import propTypes from 'prop-types';
 
const MsgItem = ({avatar,message,isRead,selfMsg}) => {
    return <View style={itemStyles(selfMsg).msgItem}>
            <Image
                blurRadius={selfMsg ? 0 : 6}
                style={{width:35,height:35,borderRadius:50}}
                source={{uri: avatar ?? 'https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png'}}
                PlaceholderContent={<ActivityIndicator />}
              />
            <Text style={itemStyles().msg}>{message}</Text>
            {isRead && <Text style={itemStyles().read}>V</Text>}
    </View>
}

const itemStyles = (selfMsg) => StyleSheet.create({
    msgItem:{    
     alignItems:'center',
     padding: '1%',
     flexDirection: selfMsg ? 'row-reverse' : 'row'
    },
    msg:{
     width: '65%',
     borderRadius: 10,
     backgroundColor: '#ccc',
     margin: '2%',
     padding: '2%'
    },
    read:{
 
    }
 });
export default MsgItem;