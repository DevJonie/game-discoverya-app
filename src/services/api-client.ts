import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: ''
    },
    headers:{
        'Content-Type': 'application/json',
        'Access-Control-Request-Method': '*',
        'Access-Control-Request-Headers': 'GET, POST, PUT, DELETE, OPTIONS',
    }
});