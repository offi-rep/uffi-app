import React,{useState,useContext,useEffect,useRef} from 'react';
import {StyleSheet,View,Text,SafeAreaView,Animated} from 'react-native';
import propTypes from 'prop-types';
 
 
const MatchPopup = props => {
    //const animVal = new Animated.Value(0);
    const animVal = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(
            animVal,{
                toValue: 1,
                duration: 800 
            }
        ).start();   
    },[]);
    
    return <Animated.View style={styles(animVal).matchWrapper}>
        <Text>matchPopup</Text>
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
        opacity: animVal
   }
});
MatchPopup.propTypes = {
    
}
export default MatchPopup;