import instance from "@/plugins/axios.js";

export const RoomList = async () => {
    try {
        const response = await instance.get('Room/RoomList');
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('获取会议室列表失败：', error);
        return null;
    }
}

// 添加会议室
export const AddRoom = async (params) => {
    try {
        const response = await instance.post('Room/AddRoom', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('添加会议室失败：', error);
        return null;
    }
}

// 变更会议室状态
export const SetRoomStatus = async (params) => {
    try {
        const response = await instance.post('Room/SetRoomStatus', params);
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('添加会议室失败：', error);
        return null;
    }
}