
const config = {
    colors:{
        bgMainColor: '#b5124d' || 'rgb(242, 32, 108)',
        bgSecColor: '#ececec',
        label: '#fff',
        textColor: '#ccc'
    }
}

export const getConfiguration = (section) => ({...config[section]});