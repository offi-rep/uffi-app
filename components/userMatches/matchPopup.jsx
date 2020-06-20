import React,{useState,useContext,useEffect,useRef} from 'react';
import {StyleSheet,View,Text,SafeAreaView,Animated} from 'react-native';
import {Button,Icon} from 'react-native-elements';
import propTypes from 'prop-types';
 
 
const MatchPopup = props => {
    //const animVal = new Animated.Value(0);
    const animVal = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        console.log('Matched with ',props.matchedUser);
        Animated.timing(
            animVal,{
                toValue: 1,
                duration: 800 
            }
        ).start();   
    },[]);
    
    return <Animated.View style={styles(animVal).matchWrapper}>
        <Text style={{fontSize: 25}}>{props.matchedUser?.name}</Text>
        <View style={styles().btnsWrapper}>
            <Button title="< Keep looking" onPress={() => props.closeMatchPopup()}/>
            <Button title="Write her >" onPress={() => props.closeMatchPopup(true)}/>
        </View>
    </Animated.View>
}
 
const styles = (animVal) => StyleSheet.create({
    matchWrapper: {
        position: 'fixed',
        backgroundColor: '#333',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99,
        opacity: animVal,
        justifyContent: 'center',
        alignItems:'center'
   },
   btnsWrapper:{
    flexDirection: 'row',
    justifyContent:'space-around'
   }
});
MatchPopup.propTypes = {
    
}
export default MatchPopup;