<script setup lang="ts">
import {onMounted, ref, shallowRef} from 'vue'

import {RoomList,AddRoom,SetRoomStatus} from "@/services/roomService.js";
import {DictionaryList} from "@/services/dictionaryService.js";
import {AddScheduling, SetSchedulingStatus} from "@/services/schedulingService.js";


const DEFAULT_RECORD = {name: null, location: null, capacity: 2, type: null}

const rows = ref([])
const record = ref(DEFAULT_RECORD)
const location = ref([])
const type = ref([])
const dialog = shallowRef(false)
const isEditing = shallowRef(false)

const headers = [
  {title: '名称', key: 'title'},
  {title: '类型', key: 'type.value', value: 'type.title'},
  {title: '所在位置', key: 'location.value', value: 'location.title'},
  {title: '可容纳的人数', key: 'capacity'},
  {title: '简介', key: 'description', align: 'end', sortable: false},
  {title: '状态', key: 'status.value', value: 'status.title', align: 'end'},
  {title: '操作', key: 'actions', align: 'end', sortable: false},
]

function add() {
  isEditing.value = false
  record.value = DEFAULT_RECORD
  dialog.value = true
}

function enable(id: number) {
  const params = {
    id: id,
    status: '1'
  }

  SetRoomStatus(params).then(response => {
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

  SetRoomStatus(params).then(response => {
    reset()
  }).catch(error => {
    console.error('获取数据失败:', error);
  })
}

function save() {
  AddRoom(record.value).then(response => {
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
    rows.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })

  DictionaryList({typeCode: 'ROOM_LOCATION'}).then(response => {
    location.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })

  DictionaryList({typeCode: 'ROOM_TYPE'}).then(response => {
    type.value = response.data
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
      <v-sheet border rounded>
        <v-data-table :headers="headers" :hide-default-footer="rows.length < 11" :items="rows" items-per-page="12">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>
                会议室列表
              </v-toolbar-title>

              <v-btn class="text-none" color="primary" prepend-icon="mdi-plus" rounded="lg" slim text="添加会议室" variant="flat" @click="add"/>
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

      <v-dialog v-model="dialog" max-width="1024">
        <v-card title="新增会议室信息">
          <template v-slot:text>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="record.name" label="会议室名称"></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-number-input v-model="record.capacity" :min="1" label="会议室可容纳的人数"></v-number-input>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-select v-model="record.location" :items="location" item-title="title" item-value="value" label="会议室所在位置" variant="outlined" prepend-inner-icon="mdi-map-marker" return-object></v-select>
              </v-col>
              <v-col cols="6">
                <v-select v-model="record.type" :items="type" item-title="title" item-value="value" label="会议室类型" variant="outlined" prepend-inner-icon="mdi-map-marker" return-object></v-select>
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