import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import propTypes from 'prop-types';
import MainContext from '../context/mainContext';

const UserImages = ({userInfo}) => {

return <View style={styles.mainImgWrapper}>
      <Image
       style={styles.mainAvatar}
       blurRadius={6}
       source={{uri:userInfo?.gender == 'm' ?
        'https://cdn0.iconfinder.com/data/icons/professional-avatar-5/48/manager_male_avatar_men_character_professions-512.png' : 
        'https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png'
       }}
      PlaceholderContent={<ActivityIndicator />}
    />
</View>
}
 
const styles = StyleSheet.create({
   mainImgWrapper: {
     justifyContent: 'center',
     alignItems: 'center',
     height: 120
   },
   mainAvatar:{
    width: 90,
    height: 90,
 }
});
 
UserImages.propTypes = {
  userInfo: propTypes.object.isRequired
}
export default UserImages;