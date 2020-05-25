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
        return <Animated.View style={styles({heightAnim,width}).bar}>
    
        </Animated.View>
    }

    return (
      <Animated.View style={styles.loaderWrapper}>
        {
            <FlatList
                data={data}
                contentContainerStyle={styles({width}).list}
                renderItem={({item,index}) => <Bar width = {width / data.length - (width/10)} index={index + 1}/>}
                keyExtractor={item => `loader_bar_${item}`}
            />
        }
      </Animated.View>
    );
} 

const styles = ({width,heightAnim}) => StyleSheet.create({
    loaderWrapper: {
        backgroundColor: "transparent",
        justifyContent: 'space-between'
   },
   list:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width
   },
   bar:{
        height: heightAnim,
        width: width,
        backgroundColor: "rgb(148, 179, 11)"
   }
});

Loader.propTypes = {
 
}

export default Loader;