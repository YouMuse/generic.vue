<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useDate} from 'vuetify'
import {GetAppointmentRoomList} from '@/services/schedulingService.js'

interface SearchFormData {
  id: number
  date: string
  startTime: string
  endTime: string
  capacity: { id: number, title: string, value: string }
  facility: { id: number, title: string, value: string }
  location: { id: number, title: string, value: string }
}


const adapter = useDate()

const rows = ref([])

const formatTime = (datetime: string) => {
  return datetime.split(' ')[1].substring(0, 5)
}

onMounted(() => {
  reset()
})

function save(id: string) {
  console.log(id)
}

async function search(formData: SearchFormData) {
  try {
    const params = {
      date: formData.date,
      startTime: formData.startTime,
      endTime: formData.endTime,
      capacity: formData.capacity.value,
      location: formData.location.value
    }

    // const response = await axios.post('/api/rooms/search', params)

    // rows.value = await response.json()
  } catch (error) {
    console.error('获取会议室列表失败：', error)
  }
}

function more() {
  console.log('more')
}

function reset() {
  GetAppointmentRoomList()
      .then(response => {
        const data = response.data;
        console.log(data);
      })
      .catch(error => {
        console.error('获取数据失败:', error);
      })

  rows.value = [
    {id: 1, number: '1-1-1', name: 'A101会议室', location: '总部大楼15层', capacity: 15, description: '宽敞明亮的会议室，配备高清投影仪、智能白板和视频会议系统，适合团队会议和客户演示。', facility: [{id: 1, title: '投影仪', value: '1'}, {id: 1, title: '白板', value: '2'}], time: {startTime: '2025/07/02 09:00:00', endTime: "2025/07/02 18:00:00"}, photo: [{url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}, {url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}], status: {title: '可预约', value: '0'}},
    {id: 2, number: '1-1-2', name: 'A102会议室', location: '总部大楼15层', capacity: 15, description: '宽敞明亮的会议室，配备高清投影仪、智能白板和视频会议系统，适合团队会议和客户演示。', facility: [{id: 1, title: '投影仪', value: '1'}, {id: 1, title: '白板', value: '2'}], time: {startTime: '2025/07/02 09:00:00', endTime: "2025/07/02 18:00:00"}, photo: [{url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}, {url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}], status: {title: '可预约', value: '0'}},
    {id: 3, number: '1-1-3', name: 'A103会议室', location: '总部大楼15层', capacity: 15, description: '宽敞明亮的会议室，配备高清投影仪、智能白板和视频会议系统，适合团队会议和客户演示。', facility: [{id: 1, title: '投影仪', value: '1'}, {id: 1, title: '白板', value: '2'}], time: {startTime: '2025/07/02 09:00:00', endTime: "2025/07/02 18:00:00"}, photo: [{url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}, {url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}], status: {title: '可预约', value: '0'}},
    {id: 4, number: '1-1-4', name: 'A104会议室', location: '总部大楼15层', capacity: 15, description: '宽敞明亮的会议室，配备高清投影仪、智能白板和视频会议系统，适合团队会议和客户演示。', facility: [{id: 1, title: '投影仪', value: '1'}, {id: 1, title: '白板', value: '2'}], time: {startTime: '2025/07/02 09:00:00', endTime: "2025/07/02 18:00:00"}, photo: [{url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}, {url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}], status: {title: '可预约', value: '0'}},
    {id: 5, number: '1-1-5', name: 'A105会议室', location: '总部大楼15层', capacity: 15, description: '宽敞明亮的会议室，配备高清投影仪、智能白板和视频会议系统，适合团队会议和客户演示。', facility: [{id: 1, title: '投影仪', value: '1'}, {id: 1, title: '白板', value: '2'}], time: {startTime: '2025/07/02 09:00:00', endTime: "2025/07/02 18:00:00"}, photo: [{url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}, {url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}], status: {title: '可预约', value: '0'}},
    {id: 6, number: '1-1-5', name: 'A106会议室', location: '总部大楼15层', capacity: 15, description: '宽敞明亮的会议室，配备高清投影仪、智能白板和视频会议系统，适合团队会议和客户演示。', facility: [{id: 1, title: '投影仪', value: '1'}, {id: 1, title: '白板', value: '2'}], time: {startTime: '2025/07/02 09:00:00', endTime: "2025/07/02 18:00:00"}, photo: [{url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}, {url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}], status: {title: '可预约', value: '0'}},
    {id: 7, number: '1-1-6', name: 'A107会议室', location: '总部大楼15层', capacity: 15, description: '宽敞明亮的会议室，配备高清投影仪、智能白板和视频会议系统，适合团队会议和客户演示。', facility: [{id: 1, title: '投影仪', value: '1'}, {id: 1, title: '白板', value: '2'}], time: {startTime: '2025/07/02 09:00:00', endTime: "2025/07/02 18:00:00"}, photo: [{url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}, {url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}], status: {title: '可预约', value: '0'}},
  ]
}

defineExpose({more, search})
</script>

<template>
  <v-card title="可用会议室">
    <v-card-text>
      <v-row>
        <v-col cols="12" v-for="item in rows" :key="item.id">
          <v-card hover>
            <div class="d-flex justify-start">
              <v-avatar class="ma-3" rounded="0" size="250">
                <v-img :src="item.photo[0].url"></v-img>
              </v-avatar>

              <v-card variant="text">
                <v-card-item>
                  <v-card-title>
                    {{ item.name }}
                  </v-card-title>

                  <v-card-subtitle>
                    <div class="d-flex justify-start ga-2 mt-2">
                      <v-chip color="teal" prepend-icon="mdi-account-group">
                        {{ item.capacity }}
                      </v-chip>
                      <v-chip color="teal" prepend-icon="mdi-map-marker">
                        {{ item.location }}
                      </v-chip>
                      <v-chip color="teal" prepend-icon="mdi-clock-time-seven-outline">
                        {{ formatTime(item.time.startTime) }}-{{ formatTime(item.time.endTime) }}
                      </v-chip>
                    </div>
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  <p class="text-medium-emphasis">{{ item.description }}</p>

                  <div class="d-flex justify-start ga-2 mt-4">
                    <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle" v-for="sub in item.facility" :key="sub.id">
                      {{ sub.title }}
                    </v-chip>
                  </div>

                </v-card-text>

                <v-card-actions>
                  <v-btn class="text-none" color="primary" rounded="lg" text="立即预约" variant="flat" @click="save(item.id)"/>
                </v-card-actions>
              </v-card>

            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn class="text-none" color="primary" append-icon="mdi-refresh" rounded="lg" text="加载更多" variant="outlined" @click="more"/>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>