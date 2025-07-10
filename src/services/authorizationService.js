import instance from '@/plugins/axios.js'

export const login = async (params) => {
    try {
        const response = await instance.post('Token/GenerateToken', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('查询预约列表失败：', error);
        return null;
    }
}