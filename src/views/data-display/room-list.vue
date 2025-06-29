<script setup>
import {onMounted, ref, shallowRef} from 'vue'
import {useDate} from 'vuetify'

const adapter = useDate()

const DEFAULT_RECORD = {id: 0, number: '', name: '', location: '', capacity: 0, description: '', status: ''}

const rows = ref([])
const record = ref(DEFAULT_RECORD)
const dialog = shallowRef(false)
const isEditing = shallowRef(false)

const headers = [
  {title: '会议室编号', key: 'number', align: 'start'},
  {title: '会议室名称', key: 'name'},
  {title: '会议室所在位置', key: 'location'},
  {title: '会议室可容纳的人数', key: 'capacity'},
  {title: '简介', key: 'description', align: 'end', sortable: false},
  {title: '会议室状态', key: 'status', align: 'end'},
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

  record.value = {id: found.id, number: found.number, name: found.name, location: found.location, capacity: found.capacity, description: found.description, status: found.status}

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
      number: record.value.number,
      name: record.value.name,
      location: record.value.location,
      capacity: record.value.capacity,
      description: record.value.description,
      status: record.value.status,
    })
  }

  dialog.value = false
}

function reset() {
  dialog.value = false
  record.value = DEFAULT_RECORD
  rows.value = [
    {id: 1, number: 'To Kill a Mockingbird', name: 'Harper Lee', location: 'Fiction', capacity: 1960, description: 'Fiction', status: '281'},
    {id: 2, number: '1984', name: 'George Orwell', location: 'Dystopian', capacity: 1949, description: 'Fiction', status: '281'},
    {id: 3, number: 'The Great Gatsby', name: 'F. Scott Fitzgerald', location: 'Fiction', capacity: 1925, description: 'Fiction', status: '281'},
    {id: 4, number: 'Sapiens', name: 'Yuval Noah Harari', location: 'Non-Fiction', capacity: 2011, description: 'Fiction', status: '281'},
    {id: 5, number: 'Dune', name: 'Frank Herbert', location: 'Sci-Fi', capacity: 1965, description: 'Fiction', status: '281'},
    {id: 6, number: 'To Kill a Mockingbird', name: 'Harper Lee', location: 'Fiction', capacity: 1960, description: 'Fiction', status: '281'},
    {id: 7, number: '1984', name: 'George Orwell', location: 'Dystopian', capacity: 1949, description: 'Fiction', status: '281'},
    {id: 8, number: 'The Great Gatsby', name: 'F. Scott Fitzgerald', location: 'Fiction', capacity: 1925, description: 'Fiction', status: '281'},
    {id: 9, number: 'Sapiens', name: 'Yuval Noah Harari', location: 'Non-Fiction', capacity: 2011, description: 'Fiction', status: '281'},
    {id: 10, number: 'Dune', name: 'Frank Herbert', location: 'Sci-Fi', capacity: 1965, description: 'Fiction', status: '281'},
    {id: 11, number: 'To Kill a Mockingbird', name: 'Harper Lee', location: 'Fiction', capacity: 1960, description: 'Fiction', status: '281'},
    {id: 12, number: '1984', name: 'George Orwell', location: 'Dystopian', capacity: 1949, description: 'Fiction', status: '281'},
    {id: 13, number: 'The Great Gatsby', name: 'F. Scott Fitzgerald', location: 'Fiction', capacity: 1925, description: 'Fiction', status: '281'},
    {id: 14, number: 'Sapiens', name: 'Yuval Noah Harari', location: 'Non-Fiction', capacity: 2011, description: 'Fiction', status: '281'},
    {id: 15, number: 'Dune', name: 'Frank Herbert', location: 'Sci-Fi', capacity: 1965, description: 'Fiction', status: '281'},
    {id: 16, number: 'To Kill a Mockingbird', name: 'Harper Lee', location: 'Fiction', capacity: 1960, description: 'Fiction', status: '281'},
    {id: 17, number: '1984', name: 'George Orwell', location: 'Dystopian', capacity: 1949, description: 'Fiction', status: '281'},
    {id: 18, number: 'The Great Gatsby', name: 'F. Scott Fitzgerald', location: 'Fiction', capacity: 1925, description: 'Fiction', status: '281'},
    {id: 19, number: 'Sapiens', name: 'Yuval Noah Harari', location: 'Non-Fiction', capacity: 2011, description: 'Fiction', status: '281'},
    {id: 20, number: 'Dune', name: 'Frank Herbert', location: 'Sci-Fi', capacity: 1965, description: 'Fiction', status: '281'},
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
                会议室列表
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