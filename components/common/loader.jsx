import React,{useState,useContext,useEffect,useRef} from 'react';
import {StyleSheet,Animated,FlatList,View,Text,SafeAreaView } from 'react-native';
import propTypes from 'prop-types';
import { getConfiguration } from '../../config/appConfig';
const colors = getConfiguration('colors');

const Loader = (props) => {
    const width = 100;
    const data = [1,2,3,4];

    const listStyle = StyleSheet.create({
        list:{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: width,
        }
     });
    return (
        <View style={listStyle.list}>{
            data.map((item,index) => <Bar key = {`loader_bar_${item}`} width = {width / data.length - (width/10)} index={index + 1}/>)
        }</View>
    );
} 

const Bar = ({width,index = 1}) => {
    const heightAnim = useRef(new Animated.Value(0)).current;
    const styles = StyleSheet.create({
        bar:{
             width: width,
             backgroundColor: colors?.bgMainColor
        }
     });
    useEffect(() => {
        Animated.loop(
            Animated.timing(
                heightAnim,{
                    toValue: 30,
                    duration: 350,
                    delay: index * 300
                }
            ),
        ).start();   
    },[]);
    
    return <Animated.View style={{...styles.bar,height: heightAnim}} />
}

Loader.propTypes = {
 
}

export default Loader;