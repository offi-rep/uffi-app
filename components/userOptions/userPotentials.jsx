import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView,Button,TouchableOpacity } from 'react-native';
import {getPotentials} from '../../api/userPotentials';
import MainContext from '../context/mainContext';
import _ from 'lodash';
import { likeAction } from '../../api/userLikes';
import MatchPopup from '../userMatches/matchPopup';
import propTypes from 'prop-types';
import UserKeysProfile from '../userInfo/userKeysProfile';
 
// get user other users options
// every swipe -> send 
// when idx == 6 -> reload next 10 potentials

// selectedUser the main user that logged in
const UserPotentials = () => {
    const {setIsLoading,selectedUser,setSelectedUser,setAppErrors} = useContext(MainContext);
    const [currentBatch,setCurrentBatch] = useState(null);      // holds current batch (10 potentials list)
    const [currentIdxShow,setCurrentIdxShow] = useState(0);     // pointer to current potential
    const [nextBatch,setNextBatch] = useState(null);            // temporary holds the next batch
    const [matchedUser,setMatchedUser] = useState(null); // temporaray nned to change
    
    useEffect(() => {loadPotentials()},[]);

    useEffect(() => {
        if(!_.isEmpty(currentBatch)){
            console.log('current: ',currentBatch[currentIdxShow]);
        }
        if(currentIdxShow === 1){   
            console.log('reload next 10 potentials');
            reloadPotentials();
        }else if(currentIdxShow === 2){
            console.log('change batches');
            setCurrentBatch(nextBatch);
            setNextBatch(null);
            setCurrentIdxShow(0);
        }
    },[currentIdxShow]);

    const loadPotentials = async() => {
        setIsLoading(true);
        const potentials = await getPotentials(selectedUser?.id);
        setCurrentBatch(potentials);
        setIsLoading(false);
    }
    const reloadPotentials = async() => {
        const potentials = await getPotentials(selectedUser?.id);
        setNextBatch(potentials);
    }

    const swipeOnUser = async(srcLiked) => {
        const trgUser = currentBatch[currentIdxShow];
        const trgLiked = trgUser?.liked;
        
        console.log(trgUser);
        const like = await likeAction(
            {
                userLiked: trgUser?.tid,
                [trgUser.liked ? 'isMatch' : 'isLiked']: srcLiked
            } 
        ,trgLiked);

        if(like.error){
            setAppErrors(like.error);
        }else{
            trgLiked && srcLiked && setMatchedUser(currentBatch[currentIdxShow]); 
            setCurrentIdxShow(currentIdxShow + 1);
        }
    }
    const closeMatchPopup = (redirectToMsg = false) => {
        setMatchedUser(null);
        redirectToMsg && alert('need to redirect');
    }
    return <>
        {!_.isEmpty(currentBatch) && currentBatch[currentIdxShow] && <>
        <UserKeysProfile userInfo={currentBatch[currentIdxShow]} />
        <View style={styles.btnsWrapper}>
            <TouchableOpacity style={[styles.likeBtn,styles.btn]} onPress={() => swipeOnUser(true)}><Text>LIKE</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.disLikeBtn,styles.btn]} onPress={() => swipeOnUser(false)}><Text>NOT</Text></TouchableOpacity>
        </View>
        {matchedUser &&
            <MatchPopup
                matchedUser={matchedUser}
                closeMatchPopup={closeMatchPopup}
            />}
       </>}
    </>
}
 
const styles = StyleSheet.create({
   nameWrapper: {
    flex:1,
   },
   likeBtn:{
    backgroundColor: 'green'
   },
   disLikeBtn:{
    backgroundColor: 'red'
   },
   btnsWrapper:{
    flexDirection: 'row',
    position:'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: '25%',
    justifyContent:'space-around',
    alignItems: 'center'
   },
   btn:{
       borderRadius: 10,
       height: 90,
       width: 90,
       justifyContent:'center',
       alignItems: 'center'
   }
});
 
UserPotentials.propTypes = {
 
}
export default UserPotentials;