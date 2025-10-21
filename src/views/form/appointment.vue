<script setup lang="ts">
import {ref} from 'vue'

import SearchRoom from '@/views/form/search-room.vue'
import AppointmentRoomList from '@/views/form/appointment-room-list.vue'

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

const items = [
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
  },
]

</script>

<template>
  <v-main>
    <v-container fluid>
      <v-carousel v-bind:show-arrows="false" progress="primary" height="300" crossfade cycle hide-delimiter-background>
        <v-carousel-item cover>
          <v-card color="indigo" height="300">
            <v-card-title class="text-h5">
              Supermodel
            </v-card-title>

            <v-card-text>
              <div class="d-flex justify-space-between">
                <div>
                  "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                </div>

                <v-avatar class="ma-3" rounded="0">
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                </v-avatar>
              </div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn class="ms-2" size="small" text="START RADIO" variant="outlined"></v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" cover></v-carousel-item>
      </v-carousel>

      <v-row>
        <v-col cols="8">
          <v-row>
            <v-col cols="12">
              <SearchRoom v-on:search="handleSearch"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <AppointmentRoomList ref="appointmentRoomListRef"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="n in 24" :key="n" cols="4">
              <v-card height="200"></v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <SearchRoom v-on:search="handleSearch"/>
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<style scoped>

</style>