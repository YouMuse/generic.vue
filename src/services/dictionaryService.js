import instance from '@/plugins/axios.js'

export const DictionaryList = async (params) => {
    try {
        const response = await instance.post('Dictionary/DictionaryList', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('获取字典列表失败：', error);
        return null;
    }
}