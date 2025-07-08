<script setup>
import {onMounted, ref, shallowRef} from 'vue'
import {useDate} from 'vuetify'

import {SearchReserveList, ReserveAudit} from '@/services/reserveService.js'
import {RoomList} from "@/services/roomService.js";

const adapter = useDate()

const DEFAULT_RECORD = {id: 0, user: {title: '', value: ''}, room: {title: '', value: ''}, startTime: adapter.date(), endTime: adapter.date(), title: '', description: '', participantCount: 2, status: {title: '待审批', value: 'pending'}}
const DEFAULT_SEARCH = {date: new Date().toISOString().split('T')[0], room: null}

const rows = ref([])
const room = ref([])
const record = ref(DEFAULT_RECORD)
const search = ref(DEFAULT_SEARCH)
const dialog = shallowRef(false)
const isEditing = shallowRef(false)

const headers = [
  {title: '部门', key: 'department.id', value: 'department.title', align: 'start'},
  {title: '预约会议室', key: 'room.id', value: 'room.title'},
  {title: '日期', key: 'date'},
  {title: '开始时间', key: 'startTime'},
  {title: '结束时间', key: 'endTime'},
  {title: '预约标题', key: 'title', sortable: false},
  {title: '参会人数', key: 'attendeesCount'},
  {title: '联系人', key: 'contactName', align: 'end', sortable: false},
  {title: '联系电话', key: 'contactPhone', align: 'end', sortable: false},
  {title: '预约状态', key: 'status.value', value: 'status.title', align: 'end'},
  {title: '操作', key: 'actions', align: 'end', sortable: false},
]

const onSubmit = () => {
  SearchReserveList(search.value).then(response => {
    rows.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })
}

function add() {
  isEditing.value = false
  record.value = DEFAULT_RECORD
  dialog.value = true
}

function Pass(id) {
  const params = {
    id: id,
    audit: '1'
  }

  ReserveAudit(params).catch(error => {
    console.error('审批失败:', error);
  })

  reset()
}

function Reject(id) {
  const params = {
    id: id,
    audit: '2'
  }

  ReserveAudit(params).catch(error => {
    console.error('审批失败:', error);
  })

  reset()
}

function save() {
  if (isEditing.value) {
    const index = rows.value.findIndex(x => x.id === record.value.id)
    rows.value[index] = record.value
  } else {
    rows.value.push({
      id: rows.value.length + 1,
      user: record.value.user,
      room: record.value.room,
      startTime: record.value.startTime,
      endTime: record.value.endTime,
      title: record.value.title,
      description: record.value.description,
      participantCount: record.value.participantCount,
      status: record.value.status,
    })
  }

  dialog.value = false
}

function reset() {
  dialog.value = false
  record.value = DEFAULT_RECORD
  search.value = DEFAULT_SEARCH

  RoomList().then(response => {
    room.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })

  SearchReserveList(search.value).then(response => {
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
    <v-container>
      <v-row>
        <v-col cols="4" sm="4" xl="2">
          <v-form v-on:submit.prevent="onSubmit">
            <v-card prepend-icon="mdi-filter" class="mx-auto" title="筛选条件">
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="search.date" label="日期" type="date" variant="outlined"></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-select v-model="search.room" :items="room" item-title="title" item-value="id" label="会议室" variant="outlined" prepend-inner-icon="mdi-chair-rolling" return-object></v-select>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-btn class="text-none" color="primary" prepend-icon="mdi-magnify" rounded="lg" text="查询" variant="flat" type="submit" block/>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>

        <v-col cols="8" sm="8" xl="10">
          <v-sheet border rounded>
            <v-data-table :headers="headers" :hide-default-footer="rows.length < 11" :items="rows">
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>
                    预约信息
                  </v-toolbar-title>

                  <v-btn class="text-none" color="primary" prepend-icon="mdi-plus" rounded="lg" slim text="添加排班" variant="flat" @click="add"/>
                </v-toolbar>
              </template>

              <template v-slot:item.actions="{ item }">
                <div class="d-flex ga-2 justify-end">
                  <v-icon color="medium-emphasis" icon="mdi-check-bold" size="small" @click="Pass(item.id)"></v-icon>

                  <v-icon color="medium-emphasis" icon="mdi-arrow-u-down-left-bold" size="small" @click="Reject(item.id)"></v-icon>
                </div>
              </template>
            </v-data-table>
          </v-sheet>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" max-width="1024">
        <v-card :title="`${isEditing ? '编辑' : '新增'} 会议室信息`">
          <template v-slot:text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="record.number" label="会议室编号"></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field v-model="record.name" label="会议室名称"></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-select v-model="record.status" :items="['available', 'unavailable', 'maintenance']" label="会议室状态"></v-select>
              </v-col>

              <v-col cols="12" md="6">
                <v-number-input v-model="record.capacity" :min="1" label="会议室可容纳的人数"></v-number-input>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="record.number" label="会议室所在位置"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="record.description" label="简介"></v-text-field>
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