<script setup lang="ts">
import {onMounted, ref} from 'vue'

import {DictionaryList} from '@/services/dictionaryService.js'
import {GetFacilityList} from '@/services/facilityService.js'

const emit = defineEmits(['search'])

const onSubmit = (e: Event) => {
  e.preventDefault()
  emit('search', record.value)
}

const DEFAULT_RECORD = {id: 0, date: new Date().toISOString().split('T')[0], startTime: '09:00', endTime: '18:00', capacity: 2, facility: null, location: null}

const record = ref(DEFAULT_RECORD)
const facility = ref([])
const location = ref([])

function reset() {
  record.value = DEFAULT_RECORD

  GetFacilityList().then(response => {
    facility.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })

  DictionaryList({typeCode: 'ROOM_LOCATION'}).then(response => {
    location.value = response.data
  }).catch(error => {
    console.error('获取数据失败:', error);
  })

}

onMounted(() => {
  reset()
})
</script>

<template>
  <v-form v-on:submit="onSubmit">
    <v-card title="搜索" prepend-icon="mdi-filter" variant="elevated" hover>
      <v-divider></v-divider>

      <v-card-text>
        <v-row dense>
          <v-col cols="4">
            <v-text-field v-model="record.date" label="日期" type="date" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="record.startTime" label="开始时间" type="time" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="record.endTime" label="结束时间" type="time" variant="outlined"></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-number-input v-model="record.capacity" label="容纳人数" control-variant="default" :min="2" variant="outlined" prepend-inner-icon="mdi-account-group"></v-number-input>
          </v-col>
          <v-col cols="4">
            <v-combobox v-model="record.facility" :items="facility" item-title="title" item-value="id" label="设施要求" chips multiple prepend-inner-icon="mdi-human-male-board"></v-combobox>
          </v-col>
          <v-col cols="4">
            <v-select v-model="record.location" :items="location" item-title="title" item-value="value" label="会议地点" variant="outlined" prepend-inner-icon="mdi-map-marker" return-object></v-select>
          </v-col>
        </v-row>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="primary" prepend-icon="mdi-magnify" text="查找会议室" class="ms-2" variant="elevated" type="submit"/>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<style scoped>

</style>