import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import UserImages from './userImages';
import InputLabel from '../common/inputLabel';
import { getConfiguration } from '../../config/appConfig';

const UserKeysProfile = ({userInfo}) => {
    const colors = getConfiguration('colors');
    console.log('UserKeysProfile userInfo: ',userInfo);

    return <View style={styles.formWrapper}>
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
                value={userInfo.crushedSentence}
                placeholder = "Crushed Sentence..."
                maxLength={40}
            />
        <InputLabel label='occupation' value={userInfo.occupation}/>
        <InputLabel label='education' value={userInfo.education}/>
        <View style={styles.bodyInfo}>
            <Text h3>{userInfo.bodyType}</Text>
            <Text h3>{userInfo.height}</Text>
        </View>
        <TextInput
            multiline
            numberOfLines={4}
            style={styles.TextInput}
            value={userInfo.freetxt}
            placeholder = "What on your mind ?..."
            maxLength={40}
        />
    </View>
}

const styles = StyleSheet.create({
   formWrapper: {
    padding: '5%'
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