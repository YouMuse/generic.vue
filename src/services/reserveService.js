import instance from '@/plugins/axios.js'

// 预约会议室
export const Reserve = async (params) => {
    try {
        const response = await instance.post('Reserve/Reserve', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('预约会议室失败：', error);
        return null;
    }
}

// 搜索预约信息
export const SearchReserveList = async (params) => {
    try {
        const response = await instance.post('Reserve/SearchReserveList', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('查询预约列表失败：', error);
        return null;
    }
}

// 预约审批
export const ReserveAudit = async (params) => {
    try {
        const response = await instance.post('Reserve/ReserveAudit', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('查询会议室列表失败：', error);
        return null;
    }
}