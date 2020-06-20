import React,{useState,useContext,useEffect,useRef} from 'react';
import {StyleSheet,Animated } from 'react-native';
import propTypes from 'prop-types';
 
 
const Wrapper = ({Component}) => {
    const fadeInVal = useRef(new Animated.Value(0)).current;

    useEffect(() => {
            Animated.timing(
                fadeInVal,{
                    toValue: 1,
                    duration: 350
                }
            ).start();   
    },[]);

    return <Animated.View style={wrapperStyle(fadeInVal).wrapper}>
        <Component/>
    </Animated.View>

}
 
const wrapperStyle = (fadeInVal) => StyleSheet.create({
    wrapper: {
        backgroundColor: "transparent",
        justifyContent: 'space-between',
        position: 'fixed',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeInVal,
        zIndex: 100
   },
  });
Wrapper.propTypes = {
 
}
export default Wrapper;