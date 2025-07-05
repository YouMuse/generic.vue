<script setup lang="ts">
import {onMounted, ref, shallowRef} from 'vue'

import {GetAppointmentRoomList} from '@/services/schedulingService.js'

interface SearchFormData {
  id: number
  date: string
  startTime: string
  endTime: string
  capacity: number
  facility: { id: number, title: string, value: string }
  location: { id: number, title: string, value: string }
}

const DEFAULT_RECORD = {id: 1, number: '1-1-1', name: 'A101会议室', location: '总部大楼15层', capacity: 15, description: '宽敞明亮的会议室，配备高清投影仪、智能白板和视频会议系统，适合团队会议和客户演示。', facility: [{id: 1, title: '投影仪', value: '1'}, {id: 1, title: '白板', value: '2'}], time: {startTime: '2025/07/02 09:00:00', endTime: "2025/07/02 18:00:00"}, photo: [{url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}, {url: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"}], status: {title: '可预约', value: '0'}}

const rows = ref([])
const record = ref(DEFAULT_RECORD)
const dialog = shallowRef(false)

const formatTime = (datetime: string) => {
  return datetime.split(' ')[1].substring(0, 5)
}

onMounted(() => {
  reset()
})

async function search(formData: SearchFormData) {
  try {
    const params = {
      date: formData.date,
      startTime: formData.startTime,
      endTime: formData.endTime,
      capacity: formData.capacity,
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

function appointment() {
  try {
    const index = rows.value.findIndex(x => x.id === record.value.id)

    // const found = rows.value.find(x => x.id === id)
    //
    // const params = {
    //   date: found.date,
    //   startTime: found.startTime,
    //   endTime: found.endTime,
    //   capacity: found.capacity,
    //   location: found.location
    // }

    // const response = await axios.post('/api/rooms/search', params)

    // rows.value = await response.json()

    const found = rows.value.find(x => x.id === record.value.id)

    console.log(found)
  } catch (error) {
    console.error('预约会议室失败：', error)
  }

  dialog.value = false
}

function save(id: string) {
  const found = rows.value.find(x => x.id === id)

  record.value = {id: found.id, name: found.name, location: found.location, capacity: found.capacity, description: found.description, facility: found.facility, time: found.time, status: found.status}

  dialog.value = true
}

function reset() {
  dialog.value = false

  GetAppointmentRoomList().then(response => {
    rows.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })

}

defineExpose({search})
</script>

<template>
  <v-card title="可用会议室">
    <v-card-text>
      <v-row>
        <v-col cols="12" v-for="item in rows" :key="item.id">
          <v-card hover>
            <div class="d-flex justify-start">
              <v-avatar class="ma-3" rounded="0" size="250">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
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
                        {{ item.location.title }}
                      </v-chip>
                      <v-chip color="teal" prepend-icon="mdi-clock-time-seven-outline">
                        {{ item.time.startTime }}-{{ item.time.endTime }}
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

  <v-dialog v-model="dialog" max-width="512">
    <v-card title="填写预约信息">
      <template v-slot:text>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="record.name" label="电话号码"></v-text-field>
          </v-col>
        </v-row>
      </template>

      <v-divider></v-divider>

      <v-card-actions class="bg-surface-light">
        <v-btn text="取消" variant="plain" @click="dialog = false"></v-btn>

        <v-spacer></v-spacer>

        <v-btn text="保存" @click="appointment"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>