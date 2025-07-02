<script setup lang="ts">
import {onMounted, ref} from 'vue'

const emit = defineEmits(['search'])

const onSubmit = (e: Event) => {
  e.preventDefault()
  emit('search', record.value)
}

const DEFAULT_RECORD = {id: 0, date: new Date().toISOString().split('T')[0], startTime: '09:00', endTime: '18:00', capacity: {id: 1, title: '3', value: '3'}, facility: {id: 1, title: '投影仪', value: '1'}, location: {id: 1, title: '总部大楼15层', value: '1'}}

const record = ref(DEFAULT_RECORD)
const capacity = ref([])
const facility = ref([])
const location = ref([])

function reset() {
  record.value = DEFAULT_RECORD
  capacity.value = [
    {id: 1, title: '3', value: '3'},
    {id: 2, title: '5', value: '5'},
    {id: 3, title: '10', value: '10'},
    {id: 4, title: '15', value: '15'},
    {id: 5, title: '25', value: '25'},
    {id: 6, title: '35', value: '35'},
  ]
  facility.value = [
    {id: 1, title: '投影仪', value: '1'},
    {id: 2, title: '白板', value: '2'},
    {id: 3, title: '视频会议', value: '3'},
    {id: 4, title: '音响系统', value: '4'},
    {id: 5, title: '高速WiFi', value: '5'},
  ]
  location.value = [
    {id: 1, title: '总部大楼15层', value: '1'},
    {id: 2, title: '研发中心2层', value: '2'},
    {id: 3, title: '总部大楼3层', value: '3'},
  ]
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
            <v-select v-model="record.capacity" :items="capacity" item-title="title" item-value="value" return-object label="容纳人数" variant="outlined" prepend-inner-icon="mdi-account-group"></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-combobox v-model="record.facility" :items="facility" item-title="title" item-value="value" label="设施要求" chips multiple></v-combobox>
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