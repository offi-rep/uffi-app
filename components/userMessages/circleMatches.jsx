import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,ScrollView,ActivityIndicator } from 'react-native';
import { ListItem,Avatar,Image } from 'react-native-elements';
import { firstCapital } from '../common/inputLabel';

// import propTypes from 'prop-types';
 
 
const CircleMatches = ({matchesList}) => {
    return <ScrollView horizontal={true} contentContainerStyle={styles.matchesWrapper}>
    {
      _.isEmpty(matchesList) ? <Text>No matches yet, start sweeping to find some</Text> : 
      matchesList.map((matchRow,idx) => (
            <View style={styles.circle} key={matchRow.liked_user_id + idx}>
              <Image
                blurRadius={6}
                style={{width:50,height:50,borderRadius:10}}
                source={{uri:'https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png'}}
                PlaceholderContent={<ActivityIndicator />}
              />
                <Text style={styles.circleText}>{firstCapital(matchRow.name)}</Text>
            </View>
      ))
    }
          
</ScrollView>
}
 
const styles = StyleSheet.create({
   matchesWrapper: {
    flexDirection:'row',
    justifyContent: 'space-evenly',
    paddingLeft: '2%',
    paddingRight: '2%',

    height: 100,
    alignItems: 'center',
    backgroundColor: '#ccc',
    flex:1,
    margin: '1%',
    borderRadius: '5px'

  },
   circle:{
      alignSelf:'center',
      justifyContent:'center',
      margin: '1%'
   },
   circleText:{
     textAlign:'center'
   }
});
 
// CircleMatches.propTypes = {
//     matchesList: PropTypes.array
// }
export default CircleMatches;