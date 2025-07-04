import instance from '@/plugins/axios.js'

export const GetAppointmentRoomList = () => {
    return instance.get('Scheduling/GetAppointmentRoomList');
}