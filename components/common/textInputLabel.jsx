import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,TextInput} from 'react-native';
import PropTypes from 'prop-types';

const TextInputLabel = ({label,value,onChange}) => {
    return <View style={styles.viewWrapper}>
    {label && <Text style={styles.label}>{label}</Text>}
    <TextInput
        style={styles.textInput}
        value={value}
    />
    </View>
}

TextInputLabel.propTypes = {
    label: PropTypes.string
}

const styles = StyleSheet.create({
    viewWrapper:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textInput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        color: '#fff'
    },
    label:{
        color:'#ccc',
    }
  });
export default TextInputLabel;
