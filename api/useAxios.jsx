import { useState, useEffect } from 'react';
import { baseApiInstance } from './apiConfig';
import MainContext from '../components/context/mainContext';

const useAxios = (url,method = 'get',data = null) => {
  const {setAppErrors} = useContext(MainContext);
  const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        const methodCall = null;
        switch(method){
            case 'post': methodCall = baseApiInstance.post;
            case 'put': methodCall = baseApiInstance.put;
            default: methodCall = baseApiInstance.get;
        }
        const fetchData = async () => {
            methodCall(url)
            .then((response) => setResponseData(response.data?.data))
            .catch((error) => {
                // ({error: error, action:'likeAction'}));
                setAppErrors(error.message);
            });
        }
        fetchData();
    }, []);

    return { data: responseData }
}

export default useAxios;