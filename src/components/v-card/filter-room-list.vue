<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useDate} from 'vuetify'

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
    <v-card prepend-icon="mdi-filter" class="mx-auto" title="筛选条件">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            {{ record.date }}
            <v-text-field v-model="record.date" label="日期" type="date" variant="outlined"></v-text-field>
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
        <v-row>
          <v-col cols="12">
            <v-number-input v-model="record.capacity" label="容纳人数" control-variant="default" :min="2" variant="outlined" prepend-inner-icon="mdi-account-group"></v-number-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-combobox v-model="record.facility" :items="facility" item-title="name" item-value="id" label="设施要求" chips multiple prepend-inner-icon="mdi-human-male-board"></v-combobox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-select v-model="record.location" :items="location" item-title="title" item-value="value" return-object label="会议地点" variant="outlined" prepend-inner-icon="mdi-map-marker"></v-select>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn class="text-none" color="primary" prepend-icon="mdi-magnify" rounded="lg" text="查找会议室" variant="flat" type="submit" block/>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<style scoped>

</style>