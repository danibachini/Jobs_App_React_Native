
import { useState, useEffect } from "react";
import  axios from "axios"; 

export default async function useFetch(endpoint, query) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const params = new URLSearchParams();
    params.append('num_pages', query.num_pages);
    params.append('query', query.query);

    const url = `http://localhost:3000/${endpoint}?${params.toString()}`;

    const options = {
        method: 'GET',
        url: url,
    }

    const fetchData = async () => {
        setIsLoading(true);

        try {
            console.log('Inside try');
            const response = await axios.request(options);
            console.log('Got the response');
            setData(response.data.data);
            // console.log('THIS IS RESPONSE DATA: ', response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            // console.log('there is an error: ', error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
};
