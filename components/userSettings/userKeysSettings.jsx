import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView,ScrollView,TextInput } from 'react-native';
import propTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import UserImages from '../userInfo/userImages';
import InputLabel from '../common/inputLabel';
import { getConfiguration } from '../../config/appConfig';
import MainContext from '../context/mainContext';

const UserKeysSettings = () => {
    const colors = getConfiguration('colors');
    const {userInfo,updateUserInfo} = useContext(MainContext);
    console.log('UserKeysSettings_userInfo: ',userInfo);

return <ScrollView contentContainerStyle={{padding: '5%'}}>
        <View style={styles.topSection}>
            <UserImages userInfo={userInfo}/>
            <View style={styles.labelsHolder}>
                <Text style={styles.name}>{userInfo.name?.charAt(0).toUpperCase() + userInfo.name?.slice(1) + ' ' + userInfo.age}</Text>
                <Text style={styles.location}>{userInfo.location}</Text>
            </View>
        </View>
        <TextInput
                multiline
                numberOfLines={4}
                style={styles.TextInput}
                onChangeText={text => setuserInfo({...userInfo,crushedSentence:text})}
                value={userInfo.crushedSentence}
                placeholder = "Crushed Sentence..."
                editable
                maxLength={40}
            />
        <InputLabel label='occupation' value={userInfo.occupation} onChange={updateUserInfo}/>
        <InputLabel label='education' value={userInfo.education} onChange={updateUserInfo}/>
        <InputLabel label='location' value={userInfo.location} onChange={updateUserInfo}/>
{/* 
        <RNPickerSelect
            onValueChange={(value) => updateUserInfo('location',value)}
            items={[
                { label: 'TLV', value: 'TLV' },
                { label: 'NOT TLV', value: 'NOT_TLV' },
                { label: 'FAR AWAY', value: 'FAR_AWAY' },
            ]}
        /> */}
        <View style={styles.bodyInfo}>
            <Text>{userInfo.bodyType}</Text>
            <Text>{userInfo.height}</Text>
        </View>
        <TextInput
            multiline
            numberOfLines={4}
            style={styles.TextInput}
            //onChangeText={text => setuserInfo({...userInfo,freeTxt:text})}
            value={userInfo.freeTxt}
            placeholder = "What on your mind ?..."
            editable
            maxLength={40}
        />
    </ScrollView>
}
 
const styles = StyleSheet.create({
    topSection:{
     flexDirection: "row"
    },
    labelsHolder:{
     justifyContent: 'center',
     alignItems: 'center',
     flex: 1
    },
    TextInput:{
     backgroundColor: '#ccc',
     borderRadius: 4
    },
    name:{
     fontSize: 26,
     color: '#ccc'
    },
    location:{
     fontSize: 26,
     color: '#ccc'
    },
    bodyInfo:{
     flexDirection: "row"
    },
    freeTxt:{
 
    },
    topInfo:{
     fontSize: 20,
     color: '#fff'
    }
 });
 
UserKeysSettings.propTypes = {
 
}
export default UserKeysSettings;