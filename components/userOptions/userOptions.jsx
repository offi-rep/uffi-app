import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,SafeAreaView,Button} from 'react-native';
import {getPotentials} from '../../api/userPotentials';
import MainContext from '../context/mainContext';
import UserInfo from '../userInfo/userInfo';
import _ from 'lodash';
import { likeAction } from '../../api/userLikes';
import MatchPopup from '../userMatches/matchPopup';
import propTypes from 'prop-types';

 
// get user other users options
// every swipe -> send 
// when idx == 6 -> reload next 10 potentials

const UserOptions = ({user}) => {
    console.log(user);
    const {setIsLoading,setSelectedUser} = useContext(MainContext);
    const [currentBatch,setCurrentBatch] = useState(null);      // holds current batch (10 potentials list)
    const [currentIdxShow,setCurrentIdxShow] = useState(0);     // pointer to current potential
    const [nextBatch,setNextBatch] = useState(null);            // temporary holds the next batch

    const [isMatched,setIsMatched] = useState(false); // temporaray nned to change
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
        const potentials = await getPotentials(user?.id);
        setCurrentBatch(potentials);
        setIsLoading(false);
    }
    const reloadPotentials = async() => {
        const potentials = await getPotentials(user?.id);
        setNextBatch(potentials);
    }

    const swipeOnUser = (isLiked) => {
        setCurrentIdxShow(currentIdxShow + 1);
        likeAction({userSrc: user?.id,userTrg: currentBatch[currentIdxShow]?.id, likeAction: isLiked});
        setIsMatched(isLiked); // temporary need to change, i think
    }

    return <View style={styles.nameWrapper}>
        {!_.isEmpty(currentBatch) && <>
        <UserInfo user={currentBatch[currentIdxShow]} />
        <View style={styles.btnsWrapper}>
            <View style={styles.btn}><Button
                title="LIKE"
                color='green'
                onPress={() => swipeOnUser(true)}
            /></View>
            <View style={styles.btn}><Button
                title="NOT"
                color='red'
                onPress={() => swipeOnUser(false)}
            /></View>
        </View>
        <Button title="<" onPress={() => setSelectedUser(null)}/>
        {isMatched && <MatchPopup />}
       </>}
    </View>
}
 
const styles = StyleSheet.create({
   nameWrapper: {

   },
   btnsWrapper:{
        flexDirection: 'row',
   },
   btn:{
       flex:1
   }
});
 
UserOptions.propTypes = {
 
}
export default UserOptions;