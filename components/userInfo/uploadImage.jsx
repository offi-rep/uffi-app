import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView } from 'react-native';
import propTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';

 
const uploadImage = () => {
    let options = {
        title: 'Select Image',
        customButtons: [
          { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };
  
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  
      return({
       filePath: response,
       fileData: response.data,
       fileUri: response.uri
      });
    }
  });
}
 
export default uploadImage;