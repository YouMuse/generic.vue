<script setup lang="ts">
import {onMounted, ref, shallowRef} from 'vue'

import {RoomList} from "@/services/roomService.js";
import {QuerySchedulingList, AddScheduling, SetSchedulingStatus} from '@/services/schedulingService.js'

const DEFAULT_RECORD = {date: new Date().toISOString().split('T')[0], startTime: '09:00', endTime: '18:00', room: null}

const DEFAULT_SEARCH = {date: new Date().toISOString().split('T')[0], room: null}

const rows = ref([])
const room = ref([])
const record = ref(DEFAULT_RECORD)
const search = ref(DEFAULT_SEARCH)
const dialog = shallowRef(false)

const headers = [
  {title: '会议室', key: 'name'},
  {title: '位置', key: 'location.value', value: 'location.title', align: 'end'},
  {title: '生效日期', key: 'date', sortable: false},
  {title: '开始时间', key: 'time.startTime'},
  {title: '结束时间', key: 'time.endTime'},
  {title: '状态', key: 'status.value', value: 'status.title', align: 'end'},
  {title: '操作', key: 'actions', align: 'end', sortable: false},
]

const onSubmit = () => {
  QuerySchedulingList(search.value).then(response => {
    rows.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })
}

function required(v: any) {
  return !!v || '必填字段'
}

function add() {
  record.value = DEFAULT_RECORD
  dialog.value = true
}

function enable(id: number) {
  const params = {
    id: id,
    status: '1'
  }

  SetSchedulingStatus(params).then(response => {
    reset()
  }).catch(error => {
    console.error('获取数据失败:', error);
  })
}

function disable(id: number) {
  const params = {
    id: id,
    status: '0'
  }

  SetSchedulingStatus(params).then(response => {
    reset()
  }).catch(error => {
    console.error('获取数据失败:', error);
  })
}

function save() {
  AddScheduling(record.value).then(response => {
    reset()
  }).catch(error => {
    console.error('获取数据失败:', error);
  })

  dialog.value = false
}

function reset() {
  dialog.value = false
  record.value = DEFAULT_RECORD

  RoomList().then(response => {
    room.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })

  QuerySchedulingList(search.value).then(response => {
    rows.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })
}

onMounted(() => {
  reset()
})
</script>

<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-form v-on:submit.prevent="onSubmit">
            <v-card prepend-icon="mdi-filter" class="mx-auto" title="筛选条件">
              <v-card-text>
                <v-row>
                  <v-col cols="3">
                    <v-text-field v-model="search.date" label="日期" type="date" variant="outlined"></v-text-field>
                  </v-col>

                  <v-col cols="3">
                    <v-select v-model="search.room" :items="room" item-title="title" item-value="id" label="会议室" variant="outlined" prepend-inner-icon="mdi-chair-rolling" return-object></v-select>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-btn class="text-none" color="primary" prepend-icon="mdi-magnify" rounded="lg" text="查询" variant="flat" type="submit"/>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>

        <v-col cols="12">
          <v-sheet border rounded>
            <v-data-table :headers="headers" :hide-default-footer="rows.length < 11" :items="rows">
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>
                    排班列表
                  </v-toolbar-title>

                  <v-btn class="text-none" color="primary" prepend-icon="mdi-plus" rounded="lg" slim text="添加排班" variant="flat" @click="add"/>
                </v-toolbar>
              </template>

              <template v-slot:item.actions="{ item }">
                <div class="d-flex ga-2 justify-end">
                  <v-icon color="medium-emphasis" icon="mdi-restart" size="small" @click="enable(item.id)"></v-icon>

                  <v-icon color="medium-emphasis" icon="mdi-close" size="small" @click="disable(item.id)"></v-icon>
                </div>
              </template>
            </v-data-table>
          </v-sheet>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" max-width="1024">
        <v-card title="新增排班信息">
          <template v-slot:text>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="record.date" label="日期" type="date" variant="outlined"></v-text-field>
              </v-col>


              <v-col cols="6">
                <v-select v-model="record.room" :items="room" item-title="title" item-value="id" :rules="[required]" return-object label="会议室"></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="record.startTime" label="开始时间" type="time" variant="outlined"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="record.endTime" label="结束时间" type="time" variant="outlined"></v-text-field>
              </v-col>
            </v-row>
          </template>

          <v-divider></v-divider>

          <v-card-actions class="bg-surface-light">
            <v-btn text="取消" variant="plain" @click="dialog = false"></v-btn>

            <v-spacer></v-spacer>

            <v-btn text="保存" @click="save"></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-main>
</template>