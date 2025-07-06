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