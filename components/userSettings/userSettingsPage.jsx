import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,ScrollView,SafeAreaView,Button } from 'react-native';
import propTypes from 'prop-types';
import MainContext from '../context/mainContext';
import InputLabel from '../common/inputLabel';
import UserSettingsContext from '../context/userSettingsContext';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import {range} from 'lodash';
import { Slider } from 'react-native';

const UserSettingsPage = () => {
    const {globalSettings,updateUserFields} = useContext(UserSettingsContext);
    useEffect(()=> {
        if(globalSettings.ageMin > globalSettings.ageMax){
            updateUserFields('ageMax',globalSettings.ageMin);
        }
    },[globalSettings.ageMin]);

    console.log('UserSettingsPage: ',globalSettings);
    return <ScrollView contentContainerStyle={styles.nameWrapper}>
        <InputLabel
            label='looking for'
            Component={() => <RNPickerSelect
                value={globalSettings.looking_for}
                stlye={{...defaultStyles}}
                items={['male','female'].map(ta => ({value: ta,label:ta?.toString(),key:ta?.toString()}))}
                onValueChange={(value) => updateUserFields('looking_for',value)}
                style={{ ...styles.picker }}
                />}
            /> 
        <View style={{flexDirection: 'row'}}>
        <InputLabel
            label='age range'
            Component={() => <RNPickerSelect
                placeholder={{label:'from'}}
                value={globalSettings.ageMin}
                stlye={{...defaultStyles}}
                items={range(18,80).map(ta => ({value: ta,label:ta?.toString(),key:ta?.toString()}))}
                onValueChange={(value) => updateUserFields('ageMin',value)}
                style={{ ...styles.picker }}
                />}
            /> 
        <InputLabel
            label=''
            Component={() => <RNPickerSelect
                placeholder={{label:'to'}}
                value={globalSettings.ageMax}
                items={range(18,81).map(ta => ({value: ta,label:ta?.toString(),key:ta?.toString()}))}
                onValueChange={(value) => updateUserFields('ageMax',(value < globalSettings.ageMin) ? globalSettings.ageMin : value)}
                style={{ ...styles.picker }}
                />}
        /> 
        </View>
        <View style={{flexDirection: 'row'}}>
        <InputLabel
            label='search_radius'
            Component={() => <View><Slider
                style={{width: 200, height: 40}}
                step = {1}
                value={globalSettings.search_radius}
                onSlidingComplete = {(val) => updateUserFields('search_radius',val)}
                //onValueChange
                minimumValue={1}
                maximumValue={100}
                minimumTrackTintColor="#8a0c44"
                thumbTintColor = "#8a0c44"
                maximumTrackTintColor="#000000"
            /><Text>{globalSettings.search_radius}</Text></View>}
        /> 
         </View>
        <View style={styles.links}>
            <Text style={styles.link} onPress={() => console.log('LOGOUT')}>LOGOUT</Text>
            <Text style={styles.link} onPress={() => console.log('Delete')}>Delete User</Text>
        </View>
    </ScrollView>
}
 
const styles = StyleSheet.create({
   nameWrapper: {

   },
   links:{
    marginTop: '15%'
   },
   link:{
    textAlign:'center',

       color:'blue'
   }
});

export default UserSettingsPage;