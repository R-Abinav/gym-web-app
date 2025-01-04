import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

export const exerciseOptions = {
    method: 'GET',
    params: {
        offset: '0',
        limit: '1000'
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    params: {
      id: 'UCE_M8A5yxnLfW0KghEeajjw'
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url,options) => {
    try{
        const response = await axios.get(url,options);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.error("Error in fetching data: ", error);
    }
}
