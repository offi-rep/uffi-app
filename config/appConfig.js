import { Dimensions  } from 'react-native';

const config = {
    colors:{
        bgMainColor: 'rgb(160, 0, 69)',
        bgSecColor: '#ececec',
        bgThrdColor: 'rgb(181, 18, 77)',
        background: 'rgb(238, 238, 238)',
        label: '#fff',
        textColor: '#ccc'
    },
    style:{
        maxHeight: Dimensions.get('window').height
    }
}

export const getConfiguration = (section) => ({...config[section]});

export const getPageDimensions = () => Dimensions.get('window').height;// - 65; // 65 = header height