import axios from 'axios'
import {authorizationStore} from '@/store/authorization.js'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 5000,
})

instance.interceptors.request.use(
    config => {
        const authorizationInfo = authorizationStore()

        config.headers.Authorization = 'Bearer ' + authorizationInfo.authorization.token

        return config
    },
    error => {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized, redirecting to login...');
        }
        return Promise.reject(error);
    }
)

export default instance