import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView,ScrollView,TextInput } from 'react-native';
import propTypes from 'prop-types';
import UserImages from '../userInfo/userImages';
import InputLabel from '../common/inputLabel';
import { getConfiguration } from '../../config/appConfig';
import MainContext from '../context/mainContext';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import UserSettingsContext from '../context/userSettingsContext';
import {range} from 'lodash';

const UserKeysSettings = ({}) => {
    const colors = getConfiguration('colors');
    const {globalSettings,updateUserFields} = useContext(UserSettingsContext);
    
    return <ScrollView contentContainerStyle={{padding: '5%'}}>
            <View style={styles.topSection}>
                <UserImages userInfo={globalSettings}/>
                <View style={styles.labelsHolder}>
                    <Text style={styles.name}>{globalSettings.name?.charAt(0).toUpperCase() + globalSettings.name?.slice(1) + ' ' + globalSettings.age}</Text>
                    <Text style={styles.location}>{globalSettings.location}</Text>
                </View>
            </View>
            <TextInput
                    multiline
                    numberOfLines={4}
                    style={styles.TextInput}
                    onChangeText={text => updateUserFields('crushedSentence',text)}
                    value={globalSettings.crushedSentence}
                    placeholder = "Crushed Sentence..."
                    editable
                    maxLength={40}
                />
            <InputLabel label='occupation' value={globalSettings.occupation} onChange={updateUserFields}/>
            <InputLabel label='education' value={globalSettings.education} onChange={updateUserFields}/>
            <InputLabel
                label='location'
                Component={() =>                 <RNPickerSelect
                    placeholder={{label:'Select your location..'}}
                    value={globalSettings.location}
                    items={['TLV','NOT TLV','FAR AWAY'].map(ta => ({value: ta,label:ta,key:ta}))}
                    onValueChange={(value) => updateUserFields('location',value)}
                    style={{ ...styles.picker }}
            />  
                }
                />     
            <View style={styles.bodyInfo}>
            <InputLabel
                label='bodyType'
                Component={() => <RNPickerSelect
                    value={globalSettings.bodyType}
                    items={['FAT','CHABI','SKINNY'].map(ta => ({value: ta,label:ta,key:ta}))}
                    onValueChange={(value) => updateUserFields('bodyType',value)}
                    style={{ ...styles.picker }}
                    />}
                />    
                <InputLabel
                label='height'
                Component={() => <RNPickerSelect
                    value={globalSettings.height}
                    items={range(120,220).map(ta => ({value: ta,label:ta?.toString(),key:ta?.toString()}))}
                    onValueChange={(value) => updateUserFields('height',value)}
                    style={{ ...styles.picker }}
                    />}
                /> 
            </View>
            <TextInput
                multiline
                numberOfLines={4}
                style={styles.TextInput}
                value={globalSettings.freeTxt}
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
    picker:{
      borderWidth:1,
      borderColor: 'rgb(204,204,204)',
      padding: '1%',
      width:200
     
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
     flexDirection: "row",
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