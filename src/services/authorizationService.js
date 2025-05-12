import instance from '@/plugins/axios.js'

export const login = (data) => {
    return instance.post('/api/login', data);
}