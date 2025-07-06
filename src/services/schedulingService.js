import instance from '@/plugins/axios.js'

// 获取会议室列表
export const GetAppointmentRoomList = async () => {
    try {
        const response = await instance.get('Scheduling/GetAppointmentRoomList');
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
export const SearchAppointmentRoomList = async (params) => {
    try {
        const response = await instance.post('Scheduling/SearchAppointmentRoomList', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('搜索会议室失败：', error);
        return null;
    }
}

// 预约会议室
export const Reserve = async (params) => {
    try {
        const response = await instance.post('Scheduling/Reserve', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('预约会议室失败：', error);
        return null;
    }
}

// 预约信息
export const AppointmentList = async (params) => {
    try {
        const response = await instance.post('Scheduling/AppointmentList', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('查询预约列表失败：', error);
        return null;
    }
}

// 预约信息审批
export const ReserveAudit = async (params) => {
    try {
        const response = await instance.post('Scheduling/ReserveAudit', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('查询会议室列表失败：', error);
        return null;
    }
}
