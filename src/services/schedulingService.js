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
export const SearchAppointmentRooms = async (params) => {
    try {
        const response = await instance.post('Scheduling/SearchRooms', params);
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
export const BookAppointmentRoom = async (bookingData) => {
    try {
        const response = await instance.post('Scheduling/BookRoom', bookingData);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('预约会议室失败：', error);
        return null;
    }
}
