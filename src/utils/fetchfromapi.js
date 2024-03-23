import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
   
  },
  headers: {
    'X-RapidAPI-Key':'6348253d0cmsh66fc831d1123b92p1eff46jsnde590f3b6778',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}


