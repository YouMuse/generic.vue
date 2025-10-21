<script setup lang="ts">
import {onMounted, ref, shallowRef} from 'vue'

import {GetSchedulingList, SearchSchedulingList} from '@/services/schedulingService.js'
import {Reserve} from '@/services/reserveService.js'
import {DepartmentList} from '@/services/departmentService.js'

interface SearchFormData {
  id: number
  date: string
  startTime: string
  endTime: string
  capacity: number
  facility: { id: number, title: string, value: string }
  location: { id: number, title: string, value: string }
}

const DEFAULT_RECORD = {reserve: {title: '', contactName: '', contactPhone: '', department: null, date: new Date().toISOString().split('T')[0], startTime: '', endTime: '', attendeesCount: 2, description: ''}, scheduling: {Id: null}}

const form = ref()
const rows = ref([])
const department = ref([])
const record = ref(DEFAULT_RECORD)
const dialog = shallowRef(false)

function required(v: any) {
  return !!v || '必填字段'
}

function formatTime(time: string) {
  if (!time) return ''
  return time.substring(0, 5)
}

async function search(formData: SearchFormData) {
  const params = {
    date: formData.date,
    startTime: formData.startTime,
    endTime: formData.endTime,
    capacity: formData.capacity,
    facility: formData.facility,
    location: formData.location,
  }

  // SearchSchedulingList(params).then(response => {
  //   rows.value = response.data
  // }).catch(error => {
  //   console.error('获取数据失败:', error);
  // })
  rows.value = [
    {
      "id": 1,
      "name": "创新会议室A",
      "location": {
        "id": 51,
        "title": "A栋3层东区",
        "value": "A3E",
        "sortNo": null,
        "description": null,
        "remake": null
      },
      "capacity": 20,
      "description": "配备投影仪和视频会议系统",
      "facility": [
        {
          "id": 101,
          "title": "投影仪",
          "value": "PROJECTOR",
          "sortNo": null,
          "description": null,
          "remake": null
        },
        {
          "id": 103,
          "title": "音响系统",
          "value": "AUDIO",
          "sortNo": null,
          "description": null,
          "remake": null
        }
      ],
      "date": "2025-07-07T00:00:00",
      "time": {
        "startTime": "09:00:00",
        "endTime": "10:30:00"
      },
      "photo": []
    },
    {
      "id": 1,
      "name": "创新会议室A",
      "location": {
        "id": 51,
        "title": "A栋3层东区",
        "value": "A3E",
        "sortNo": null,
        "description": null,
        "remake": null
      },
      "capacity": 20,
      "description": "配备投影仪和视频会议系统",
      "facility": [
        {
          "id": 101,
          "title": "投影仪",
          "value": "PROJECTOR",
          "sortNo": null,
          "description": null,
          "remake": null
        },
        {
          "id": 103,
          "title": "音响系统",
          "value": "AUDIO",
          "sortNo": null,
          "description": null,
          "remake": null
        }
      ],
      "date": "2025-07-07T00:00:00",
      "time": {
        "startTime": "09:00:00",
        "endTime": "10:30:00"
      },
      "photo": []
    },
    {
      "id": 1,
      "name": "创新会议室A",
      "location": {
        "id": 51,
        "title": "A栋3层东区",
        "value": "A3E",
        "sortNo": null,
        "description": null,
        "remake": null
      },
      "capacity": 20,
      "description": "配备投影仪和视频会议系统",
      "facility": [
        {
          "id": 101,
          "title": "投影仪",
          "value": "PROJECTOR",
          "sortNo": null,
          "description": null,
          "remake": null
        },
        {
          "id": 103,
          "title": "音响系统",
          "value": "AUDIO",
          "sortNo": null,
          "description": null,
          "remake": null
        }
      ],
      "date": "2025-07-07T00:00:00",
      "time": {
        "startTime": "09:00:00",
        "endTime": "10:30:00"
      },
      "photo": []
    },
    {
      "id": 1,
      "name": "创新会议室A",
      "location": {
        "id": 51,
        "title": "A栋3层东区",
        "value": "A3E",
        "sortNo": null,
        "description": null,
        "remake": null
      },
      "capacity": 20,
      "description": "配备投影仪和视频会议系统",
      "facility": [
        {
          "id": 101,
          "title": "投影仪",
          "value": "PROJECTOR",
          "sortNo": null,
          "description": null,
          "remake": null
        },
        {
          "id": 103,
          "title": "音响系统",
          "value": "AUDIO",
          "sortNo": null,
          "description": null,
          "remake": null
        }
      ],
      "date": "2025-07-07T00:00:00",
      "time": {
        "startTime": "09:00:00",
        "endTime": "10:30:00"
      },
      "photo": []
    },
    {
      "id": 1,
      "name": "创新会议室A",
      "location": {
        "id": 51,
        "title": "A栋3层东区",
        "value": "A3E",
        "sortNo": null,
        "description": null,
        "remake": null
      },
      "capacity": 20,
      "description": "配备投影仪和视频会议系统",
      "facility": [
        {
          "id": 101,
          "title": "投影仪",
          "value": "PROJECTOR",
          "sortNo": null,
          "description": null,
          "remake": null
        },
        {
          "id": 103,
          "title": "音响系统",
          "value": "AUDIO",
          "sortNo": null,
          "description": null,
          "remake": null
        }
      ],
      "date": "2025-07-07T00:00:00",
      "time": {
        "startTime": "09:00:00",
        "endTime": "10:30:00"
      },
      "photo": []
    },
    {
      "id": 1,
      "name": "创新会议室A",
      "location": {
        "id": 51,
        "title": "A栋3层东区",
        "value": "A3E",
        "sortNo": null,
        "description": null,
        "remake": null
      },
      "capacity": 20,
      "description": "配备投影仪和视频会议系统",
      "facility": [
        {
          "id": 101,
          "title": "投影仪",
          "value": "PROJECTOR",
          "sortNo": null,
          "description": null,
          "remake": null
        },
        {
          "id": 103,
          "title": "音响系统",
          "value": "AUDIO",
          "sortNo": null,
          "description": null,
          "remake": null
        }
      ],
      "date": "2025-07-07T00:00:00",
      "time": {
        "startTime": "09:00:00",
        "endTime": "10:30:00"
      },
      "photo": []
    }
  ]
}

// function more() {
//   console.log('more')
// }

function appointment() {
  form.value.validate().then(function (results: any) {
    if (!results.valid) return

    Reserve(record.value).catch(error => {
      console.error('预约失败:', error);
    })

    dialog.value = false

    reset()
  })
}

function submit(id: string) {
  const found = rows.value.find(x => x.id === id)

  record.value = {reserve: {department: null, date: found.date.split('T')[0], startTime: found.time.startTime, endTime: found.time.endTime, attendeesCount: 2}, scheduling: {Id: found.id}}

  dialog.value = true
}

function reset() {
  dialog.value = false

  GetSchedulingList().then(response => {
    rows.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })

  DepartmentList().then(response => {
    department.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })

}

onMounted(() => {
  reset()
})

defineExpose({search})
</script>

<template>
  <v-card title="可用会议室" variant="elevated" hover>
    <v-card-text>
      <v-row>
        <v-col cols="6" v-for="item in rows" :key="item.id">
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
                  <v-btn class="text-none" color="primary" rounded="lg" text="立即预约" variant="flat" @click="submit(item.id)"/>
                </v-card-actions>
              </v-card>

            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>

    <!--    <v-card-actions class="justify-center">-->
    <!--      <v-btn class="text-none" color="primary" append-icon="mdi-refresh" rounded="lg" text="加载更多" variant="outlined" @click="more"/>-->
    <!--    </v-card-actions>-->
  </v-card>

  <v-dialog v-model="dialog" max-width="1080">
    <v-card title="填写预约信息">
      <v-form ref="form">
        <v-container>
          <v-row>
            <v-col cols="4">
              <v-text-field v-model="record.reserve.date" label="预约日期" type="date" variant="outlined" disabled></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="record.reserve.startTime" label="开始时间" type="time" variant="outlined" disabled></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="record.reserve.endTime" label="结束时间" type="time" variant="outlined" disabled></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="record.reserve.title" :rules="[required]" label="会议主题" variant="outlined"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="record.reserve.contactName" :rules="[required]" label="联系人姓名" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="record.reserve.contactPhone" :rules="[required]" label="联系人电话" variant="outlined"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-select v-model="record.reserve.department" :items="department" item-title="title" item-value="id" :rules="[required]" label="部门" variant="outlined" prepend-inner-icon="mdi-office-building" return-object></v-select>
            </v-col>
            <v-col cols="6">
              <v-number-input v-model="record.reserve.attendeesCount" label="参会人数" control-variant="default" :min="2" variant="outlined" prepend-inner-icon="mdi-account-group"></v-number-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea v-model="record.reserve.description" label="会议说明" variant="outlined" clear-icon="mdi-close-circle" prepend-inner-icon="mdi-comment" clearable counter></v-textarea>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-card-actions class="bg-surface-light">
            <v-btn text="取消" variant="plain" @click="dialog = false"></v-btn>

            <v-spacer></v-spacer>

            <v-btn text="保存" @click="appointment"></v-btn>
          </v-card-actions>
        </v-container>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>