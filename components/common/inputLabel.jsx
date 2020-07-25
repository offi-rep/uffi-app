import React,{useState,useContext,useEffect} from 'react';
import {View,StyleSheet,Text,TextInput } from 'react-native';
import propTypes from 'prop-types';
 
export const firstCapital = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);

const InputLabel = ({label,value,onChange = null,Component = null,style = null}) => {
    return <View style={styles.inputWrapper}>
        <Text style={{
            padding: '1%'
        }}>
            {firstCapital(label)}
        </Text>
        {Component ? <Component/> : 
            <TextInput
                style={{
                    ...style,
                    borderWidth:1,
                    borderColor: '#ccc',
                    borderRadius: 4,
                    padding: '1%'
                }}
                onChangeText={text => !onChange ? null : onChange(label,text)}
                value={value?.toString()}
            />
        }
    </View>
}
const styles = StyleSheet.create({
    inputWrapper:{
       margin: '1%',
       flex:1
    }
 });
InputLabel.propTypes = {
    label: propTypes.string,
    onChange: propTypes.func
}
export default InputLabel;