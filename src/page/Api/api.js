import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    accept: 'application/json',
    'X-CSRFTOKEN': process.env.REACT_APP_API_KEY,
  },
});

export default api;
