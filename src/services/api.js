import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackbackend23.herokuapp.com'
});

export default api;