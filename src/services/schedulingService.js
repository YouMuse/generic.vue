import instance from '@/plugins/axios.js'

// 获取排班列表
export const GetSchedulingList = async () => {
    try {
        const response = await instance.get('Scheduling/GetSchedulingList');
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('获取排班列表失败：', error);
        return null;
    }
}

// 搜索排班
export const SearchSchedulingList = async (params) => {
    try {
        const response = await instance.post('Scheduling/SearchSchedulingList', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('搜索排班失败：', error);
        return null;
    }
}

// 查询排班
export const QuerySchedulingList = async (params) => {
    try {
        const response = await instance.post('Scheduling/QuerySchedulingList', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('搜索排班失败：', error);
        return null;
    }
}

// 添加排班
export const AddScheduling = async (params) => {
    try {
        const response = await instance.post('Scheduling/AddScheduling', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('添加排班失败：', error);
        return null;
    }
}

// 变更排班状态
export const SetSchedulingStatus = async (params) => {
    try {
        const response = await instance.post('Scheduling/SetSchedulingStatus', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('添加排班失败：', error);
        return null;
    }
}