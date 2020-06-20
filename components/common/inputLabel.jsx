import React,{useState,useContext,useEffect} from 'react';
import {View,Text,TextInput } from 'react-native';
import propTypes from 'prop-types';
 
export const firstCapital = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);

const InputLabel = ({label,value,onChange,CustomInput = null}) => {
    return <View style={{margin: '1%'}}>
        <Text style={{
            padding: '1%'

        }}>
            {firstCapital(label)}
        </Text>
            <TextInput
                style={{
                    borderWidth:1,
                    borderColor: '#ccc',
                    borderRadius: '4px',
                    padding: '1%'
                }}
                onChangeText={text => !onChange ? null : onChange(label,text)}
                value={value}
            />
    </View>
}

InputLabel.propTypes = {
    label: propTypes.string,
    onChange: propTypes.func
}
export default InputLabel;