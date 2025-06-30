<script setup>
import {onMounted, ref, shallowRef} from 'vue'
import {useDate} from 'vuetify'

const adapter = useDate()

const DEFAULT_RECORD = {id: 0, user: {title: '', value: ''}, room: {title: '', value: ''}, startTime: adapter.date(), endTime: adapter.date(), title: '', description: '', participantCount: 2, status: {title: '待审批', value: 'pending'}}

const rows = ref([])
const record = ref(DEFAULT_RECORD)
const dialog = shallowRef(false)
const isEditing = shallowRef(false)

const headers = [
  {title: '预约用户', key: 'user.value', value: 'user.title', align: 'start'},
  {title: '预约会议室', key: 'room.value', value: 'room.title'},
  {title: '预约开始时间', key: 'startTime'},
  {title: '预约结束时间', key: 'endTime'},
  {title: '预约标题', key: 'title', sortable: false},
  {title: '预计参与人数', key: 'participantCount'},
  {title: '预约详细描述', key: 'description', align: 'end', sortable: false},
  {title: '预约状态', key: 'status.value', value: 'status.title', align: 'end'},
  {title: '操作', key: 'actions', align: 'end', sortable: false},
]

onMounted(() => {
  reset()
})

function add() {
  isEditing.value = false
  record.value = DEFAULT_RECORD
  dialog.value = true
}

function edit(id) {
  isEditing.value = true

  const found = rows.value.find(x => x.id === id)

  record.value = {
    id: found.id,
    user: found.user,
    room: found.room,
    startTime: found.startTime,
    endTime: found.endTime,
    title: found.title,
    description: found.description,
    participantCount: found.participantCount,
    status: found.status,
  }

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
  rows.value = [
    {id: 1, user: {title: '用户A', value: '1'}, room: {title: '会议室1', value: '1'}, startTime: adapter.date(), endTime: adapter.date(), title: '某某会议1', description: '某某会议', participantCount: 2, status: {title: '待审批', value: 'pending'}},
    {id: 2, user: {title: '用户B', value: '2'}, room: {title: '会议室2', value: '2'}, startTime: adapter.date(), endTime: adapter.date(), title: '某某会议2', description: '某某会议', participantCount: 2, status: {title: '已批准', value: 'approved'}},
    {id: 3, user: {title: '用户C', value: '3'}, room: {title: '会议室3', value: '3'}, startTime: adapter.date(), endTime: adapter.date(), title: '某某会议3', description: '某某会议', participantCount: 2, status: {title: '已拒绝', value: 'rejected'}},
    {id: 4, user: {title: '用户D', value: '4'}, room: {title: '会议室4', value: '4'}, startTime: adapter.date(), endTime: adapter.date(), title: '某某会议4', description: '某某会议', participantCount: 2, status: {title: '已取消', value: 'canceled'}},
  ]
}
</script>

<template>
  <v-main>
    <v-container>
      <v-sheet border rounded>
        <v-data-table :headers="headers" :hide-default-footer="rows.length < 11" :items="rows">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>
                预约信息
              </v-toolbar-title>

              <v-btn class="text-none" color="primary" prepend-icon="mdi-plus" rounded="lg" slim text="添加会议室" variant="flat" @click="add"/>
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