import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.31.59.119:3333'
})

export default api