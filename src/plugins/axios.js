import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 5000,
})

instance.interceptors.request.use(
    config => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
    },
    error => {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized, redirecting to login...');
        }
        return Promise.reject(error);
    }
)

export default instance