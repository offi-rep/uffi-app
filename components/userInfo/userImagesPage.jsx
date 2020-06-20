import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,SafeAreaView,ScrollView,ActivityIndicator,View} from 'react-native';
import propTypes from 'prop-types';
import { Image } from 'react-native-elements';
import MainContext from '../context/mainContext';
import { getUserImages } from '../../api/userImages';
import EmptyImage from './emptyImage';

const UserImagesPage = props => {
    const {userInfo,updateUserInfo} = useContext(MainContext);
    const [userPhotos,setUserPhotos] = useState([null,null,null,null,null,null]);
    const [markedPhotos,setMarkedPhotos] = useState({first: null,second: null});
    const imageSize = {width:145,height:145};

    useEffect(() => {
        console.log('UserImagesPage: ', userInfo);
        loadUsrImages();
    },[userInfo?.id]);

    const loadUsrImages = async () => {
        const images = await getUserImages();
        const initilizeArray = [...userPhotos];
        images.forEach((ele,idx) => {
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
                style={{width: imageSize.width,height: imageSize.height,margin:'4%',marginLeft:'auto',marginRight:'auto'}}
                PlaceholderContent={<ActivityIndicator />}
            /> : <EmptyImage width={imageSize.width} height={imageSize.height} uploadImage={uploadImage}/>
        )}
    </ScrollView>
}
const styles = StyleSheet.create({
   imagesPage: {
     alignItems:'center',
     justifyContent:'space-between',
     flexWrap: 'wrap',
     display: 'grid',
     gridTemplateColumns: '1fr 1fr'
   }
});
 


UserImagesPage.propTypes = {
 
}
export default UserImagesPage;