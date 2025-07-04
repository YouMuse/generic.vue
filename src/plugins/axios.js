import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

})

instance.interceptors.request.use(
    config => {
        // const store
        //
        // config.headers.Authorization = 'Bearer ' + store.authorization.token

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