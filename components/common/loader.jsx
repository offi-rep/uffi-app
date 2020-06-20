import React,{useState,useContext,useEffect,useRef} from 'react';
import {StyleSheet,Animated,FlatList,View,Text,SafeAreaView } from 'react-native';
import propTypes from 'prop-types';
 
const Loader = (props) => {
    const width = 100;
    const data = [1,2,3,4];

    const Bar = ({width,index = 1}) => {
        const heightAnim = new Animated.Value(0);
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
        return <Animated.View style={styles({animationValue:heightAnim,width}).bar} />
    }

    return (
        <View style={styles({width}).list}>{
            data.map((item,index) => <Bar key = {`loader_bar_${item}`} width = {width / data.length - (width/10)} index={index + 1}/>)
        }</View>
    );
} 

const styles = ({width,animationValue}) => StyleSheet.create({
   list:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width,
   },
   bar:{
        height: animationValue,
        width: width,
        backgroundColor: "rgb(148, 179, 11)"
   }
});

Loader.propTypes = {
 
}

export default Loader;