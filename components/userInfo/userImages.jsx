import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import propTypes from 'prop-types';
import MainContext from '../context/mainContext';

const UserImages = props => {
const {selectedUser} = useContext(MainContext);

return <View style={styles.mainImgWrapper}>
    <Image
        style={styles.mainAvatar}
        source={{uri:selectedUser?.gender == 'm' ?
        'https://cdn0.iconfinder.com/data/icons/professional-avatar-5/48/manager_male_avatar_men_character_professions-512.png' : 
        'https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png'
    }}/>
</View>
}
 
const styles = StyleSheet.create({
   mainImgWrapper: {
     justifyContent: 'center',
     alignItems: 'center',
     height: 120
   },
   mainAvatar:{
    width: 120,
    height: 120,
    borderRadius: '50%',
    backgroundColor: '#ccc'
 }
});
 
UserImages.propTypes = {

}
export default UserImages;