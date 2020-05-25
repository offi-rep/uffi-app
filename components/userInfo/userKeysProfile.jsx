import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import TextInputLabel from '../common/textInputLabel';
import MainContext from '../context/mainContext';
import UserImages from './userImages';

const UserKeysProfile = ({userInfo,updateUserInfo =  null}) => {
    const {selectedUser} = useContext(MainContext);
    console.log('userInfo: ',userInfo);
    const BasicInput = ({el}) => <TextInputLabel 
            label={el}
            key={el}     
            value={userInfo[el]}
            readOnly
            //onChange={(text) => setuserInfo({...userInfo,[el]:text})}
    />

    return <View style={styles.formWrapper}>
        <View style={styles.topSection}>
            <UserImages userInfo={userInfo}/>
            <View style={styles.labelsHolder}>
                <Text style={styles.name}>{userInfo.firstName.charAt(0).toUpperCase() + userInfo.firstName.slice(1) + ' ' + userInfo.age}</Text>
                <Text style={styles.location}>{userInfo.location}</Text>
            </View>
        </View>
        <TextInput
                multiline
                numberOfLines={4}
                style={styles.TextInput}
                //onChangeText={text => setuserInfo({...userInfo,crushedSentence:text})}
                value={userInfo.crushedSentence}
                placeholder = "Crushed Sentence..."
                editable
                maxLength={40}
            />
        <BasicInput el='occupation' />
        <BasicInput el='education' />
        <View style={styles.bodyInfo}>
            <Text h3>{userInfo.bodyType}</Text>
            <Text h3>{userInfo.height}</Text>
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
    </View>
}

const styles = StyleSheet.create({
   formWrapper: {

   },
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

UserKeysProfile.propTypes = {
    userInfo: PropTypes.object.isRequired
}
export default UserKeysProfile;