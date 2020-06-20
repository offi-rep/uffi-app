
const config = {
    colors:{
        bgMainColor: '#916eb9',
        bgSecColor: '#ececec',
        label: '#fff',
        textColor: '#ccc'
    }
}

export const getConfiguration = (section) => ({...config[section]});