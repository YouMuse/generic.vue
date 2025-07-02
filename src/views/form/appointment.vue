<script setup lang="ts">
import {ref} from 'vue'

import AppointmentRoomList from '@/components/v-card/appointment-room-list.vue'
import FilterRoomList from '@/components/v-card/filter-room-list.vue'

const appointmentRoomListRef = ref()

const handleSearch = (formData: {
  id: number
  date: string
  startTime: string
  endTime: string
  capacity: { id: number, title: string, value: string }
  facility: { id: number, title: string, value: string }
  location: { id: number, title: string, value: string }
}) => {
  appointmentRoomListRef.value?.search(formData)
}

</script>

<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card title="会议室预约" text="轻松预订您需要的会议室，高效安排会议" variant="text"></v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" sm="4" xl="2">
          <FilterRoomList v-on:search="handleSearch"/>
        </v-col>

        <v-col cols="8" sm="8" xl="10">
          <AppointmentRoomList ref="appointmentRoomListRef"/>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>