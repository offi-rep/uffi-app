import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView } from 'react-native';
import propTypes from 'prop-types';
import MainContext from '../context/mainContext';
import {Button} from 'react-native-elements';

const MainError = ({errors}) => {
    const {setAppErrors} = useContext(MainContext);

    console.log('MainError: ', errors);

    return <View style={styles.nameWrapper}>
        <Text>{errors?.data?.msg || 'error'}</Text>
        <Button onPress={() => setAppErrors(null)} title="OK"/>
    </View>
}
 
const styles = StyleSheet.create({
   nameWrapper: {

   }
});
 
MainError.propTypes = {
 
}
export default MainError;