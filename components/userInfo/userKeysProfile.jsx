import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Text,TextInput} from 'react-native';
import PropTypes from 'prop-types';
import TextInputLabel from '../common/textInputLabel';
import MainContext from '../context/mainContext';

const UserKeysProfile = props => {
const {selectedUser} = useContext(MainContext);
const [formData,setFormData] = useState({...selectedUser});

const BasicInput = ({el}) => <TextInputLabel 
        label={el}
        key={el}     
        value={formData[el]}
        onChange={(text) => setFormData({...formData,[el]:text})}
/>

return <View style={styles.formWrapper}>
    <View style={styles.nameAgeHolder}>
        <Text style={styles.name}>{formData.firstName.charAt(0).toUpperCase() + formData.firstName.slice(1)}</Text>
        <Text style={styles.age}>{formData.age}</Text>
    </View>
    <TextInput
           multiline
           numberOfLines={4}
           style={styles.crashS}
           onChangeText={text => setFormData({...formData,crushedSentence:text})}
           value={formData.crushedSentence}
           placeholder = "Crushed Sentence..."
           editable
           maxLength={40}
    />
    {formData && Object.keys(formData).map(el => <BasicInput el={el} />)}
</View>
}

const styles = StyleSheet.create({
   formWrapper: {

   },
   nameAgeHolder:{
    flexDirection: "row",
    justifyContent: "space-between"
   },
   crashS:{
    backgroundColor: '#ccc',
    borderRadius: '4px'
   },
   name:{
    fontSize: 22,
    color: '#fff'
   },
   age:{
    fontSize: 26
   }
});
 
UserKeysProfile.propTypes = {
    userInfo: PropTypes.object.isRequired
}
export default UserKeysProfile;