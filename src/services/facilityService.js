import instance from "@/plugins/axios.js";

export const GetFacilityList = async () => {
    try {
        const response = await instance.get('Facility/GetFacilityList');
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('获取设施列表失败：', error);
        return null;
    }
}