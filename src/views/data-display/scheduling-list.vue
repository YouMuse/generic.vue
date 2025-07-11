<script setup lang="ts">
import {onMounted, ref, shallowRef} from 'vue'

import {RoomList} from "@/services/roomService.js";
import {QuerySchedulingList} from '@/services/schedulingService.js'

const DEFAULT_RECORD = {date: new Date().toISOString().split('T')[0], startTime: '09:00', endTime: '18:00', room: null}

const DEFAULT_SEARCH = {date: new Date().toISOString().split('T')[0], room: null}

const rows = ref([])
const room = ref([])
const record = ref(DEFAULT_RECORD)
const search = ref(DEFAULT_SEARCH)
const dialog = shallowRef(false)
const isEditing = shallowRef(false)

const headers = [
  {title: '会议室', key: 'name'},
  {title: '电话号码', key: 'phone', align: 'end'},
  {title: '邮箱', key: 'email', sortable: false},
  {title: '昵称', key: 'nickName'},
  {title: '所属科室', key: 'department.value', value: 'department.title', align: 'end'},
  {title: '角色', key: 'role', align: 'end'},
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

function add() {
  isEditing.value = false
  record.value = DEFAULT_RECORD
  dialog.value = true
}

function edit(id) {
  isEditing.value = true

  const found = rows.value.find(x => x.id === id)

  record.value = {id: found.id, name: found.name, email: found.email, nickName: found.nickName, phone: found.phone, department: found.department, role: found.role, status: found.status}

  dialog.value = true
}

function remove(id) {
  const index = rows.value.findIndex(x => x.id === id)
  rows.value.splice(index, 1)
}

function save() {
  if (isEditing.value) {
    const index = rows.value.findIndex(x => x.id === record.value.id)
    rows.value[index] = record.value
  } else {
    rows.value.push({
      id: rows.value.length + 1,
      name: record.value.name,
      email: record.value.email,
      nickName: record.value.nickName,
      phone: record.value.phone,
      department: record.value.department,
      role: record.value.role,
      status: record.value.status,
    })
  }

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
                  <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="edit(item.id)"></v-icon>

                  <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="remove(item.id)"></v-icon>
                </div>
              </template>
            </v-data-table>
          </v-sheet>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" max-width="1024">
        <v-card :title="`${isEditing ? '编辑' : '新增'} 排班信息`">
          <template v-slot:text>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="record.date" label="日期" type="date" variant="outlined"></v-text-field>
              </v-col>


              <v-col cols="6">
                <v-select v-model="record.room" :items="room" item-title="title" item-value="id" return-object label="会议室"></v-select>
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