import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,TouchableOpacity,ScrollView,ActivityIndicator,Text} from 'react-native';
import propTypes from 'prop-types';
import { Image } from 'react-native-elements';
import MainContext from '../context/mainContext';
import { getUserImages } from '../../api/userImages';
const imageSize = {width:145,height:145};

const UserImagesPage = props => {
    const {selectedUser} = useContext(MainContext);
    const [userPhotos,setUserPhotos] = useState([null,null,null,null,null,null]);
    const [markedPhotos,setMarkedPhotos] = useState({first: null,second: null});

    useEffect(() => {
        console.log('UserImagesPage selectedUser: ', selectedUser);
        loadUsrImages();
    },[selectedUser?.id]);

    const loadUsrImages = async () => {
        const images = await getUserImages();
        const initilizeArray = [...userPhotos];
        images?.forEach((ele,idx) => {
            initilizeArray[idx] = ele;
        });
        setUserPhotos(initilizeArray);
    }
    const uploadImage = () => {
        console.log('upload');
    }

    // get all users photos
    return <ScrollView contentContainerStyle={styles.imagesPage}>{
        userPhotos.map((img,idx) => 
            img ? <Image
                key={img + idx}
                onLongPress={() => console.log(img)}
                source={{uri: img?.url || 'https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg'}}
                style={styles.image}
                PlaceholderContent={<ActivityIndicator />}
            /> : <TouchableOpacity
                    key={img + idx}
                    style={[styles.image,styles.emptyImg]}
                    onPress = {uploadImage}
                >
                <Text style={styles.plusSign}>+</Text>
            </TouchableOpacity>
        )}
    </ScrollView>
}
const styles = StyleSheet.create({
   imagesPage: {
     alignItems:'center',
     justifyContent:'space-between',
     flexWrap: 'wrap',
     flexDirection: 'row',
     height: '100%',
     justifyContent: 'space-around',
     marginTop:'auto'
   },
   image:{
    width: imageSize.width,
    height: imageSize.height,
    margin:'4%',
    marginLeft:'auto',
    marginRight:'auto',
   },
   emptyImg:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#ccc'
   },
   plusSign:{
    fontSize: 50,
   }
});


UserImagesPage.propTypes = {
 
}
export default UserImagesPage;