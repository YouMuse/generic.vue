import instance from '@/plugins/axios.js'

// 获取会议室列表
export const GetSchedulingList = async () => {
    try {
        const response = await instance.get('Scheduling/GetSchedulingList');
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('获取会议室列表失败：', error);
        return null;
    }
}

// 搜索会议室
export const SearchSchedulingList = async (params) => {
    try {
        const response = await instance.post('Scheduling/SearchSchedulingList', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('搜索会议室失败：', error);
        return null;
    }
}

// 查询会议室
export const QuerySchedulingList = async (params) => {
    try {
        const response = await instance.post('Scheduling/QuerySchedulingList', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('搜索会议室失败：', error);
        return null;
    }
}
