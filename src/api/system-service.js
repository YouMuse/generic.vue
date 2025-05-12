import instance from '@/plugins/axios.js'

export const getPost = () => {
    return instance.get('posts');
}