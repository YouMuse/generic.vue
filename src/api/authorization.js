import instance from '@/plugins/axios.js'

export const loginApi = (data) => {
    return instance.post('/api/login', data);
}