import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView ,TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
//import uploadImage from './uploadImage';

 
const EmptyImage = ({uploadImage,width,height}) => {
    return <TouchableOpacity
                style={styles(width,height).emptyImage}
                onPress = {()=> console.log('uploadImage')}
            >
        <Text style={styles().plusSign}>+</Text>
    </TouchableOpacity>
}
const styles = (width,height) => StyleSheet.create({
    emptyImage:{
     width: width,
     height: height,
     margin:'4%',
     marginLeft:'auto',
     marginRight:'auto',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#ccc'

    },
    plusSign:{
        fontSize: 50,
    }
 });
  
 
EmptyImage.propTypes = {
    uploadImage: propTypes.func.isRequired,
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired
}
export default EmptyImage;