import instance from "@/plugins/axios.js";

export const DepartmentList = async () => {
    try {
        const response = await instance.get('Department/DepartmentList');
        if (!response?.data || response.data.code !== 1) {
            return null;
        }
        return response.data;
    } catch (error) {
        console.error('获取部门列表失败：', error);
        return null;
    }
}