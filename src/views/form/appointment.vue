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

const items2 = [
  {
    id: 1,
    color: 'info',
    icon: 'mdi-information',
    title: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
  },
  {
    id: 2,
    color: 'green',
    icon: 'mdi-alert-circle',
    title: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
  },
  {
    id: 2,
    color: 'green',
    icon: 'mdi-alert-circle',
    title: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
  },
  {
    id: 2,
    color: 'green',
    icon: 'mdi-alert-circle',
    title: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
  },
  {
    id: 2,
    color: 'green',
    icon: 'mdi-alert-circle',
    title: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
  },
  {
    id: 2,
    color: 'green',
    icon: 'mdi-alert-circle',
    title: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
  },
  {
    id: 2,
    color: 'green',
    icon: 'mdi-alert-circle',
    title: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
  },
  {
    id: 2,
    color: 'green',
    icon: 'mdi-alert-circle',
    title: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
  },
  {
    id: 2,
    color: 'green',
    icon: 'mdi-alert-circle',
    title: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
  }
]

</script>

<template>
  <v-main>
    <v-container fluid>
      <!--      <v-carousel v-bind:show-arrows="false" progress="primary" height="300" crossfade cycle hide-delimiter-background>-->
      <!--        <v-carousel-item cover>-->
      <!--          <v-card color="indigo" height="300">-->
      <!--            <v-card-title class="text-h5">-->
      <!--              Supermodel-->
      <!--            </v-card-title>-->

      <!--            <v-card-text>-->
      <!--              <div class="d-flex justify-space-between">-->
      <!--                <div>-->
      <!--                  "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."-->
      <!--                </div>-->

      <!--                <v-avatar class="ma-3" rounded="0">-->
      <!--                  <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>-->
      <!--                </v-avatar>-->
      <!--              </div>-->
      <!--            </v-card-text>-->

      <!--            <v-divider></v-divider>-->

      <!--            <v-card-actions>-->
      <!--              <v-btn class="ms-2" size="small" text="START RADIO" variant="outlined"></v-btn>-->
      <!--            </v-card-actions>-->
      <!--          </v-card>-->
      <!--        </v-carousel-item>-->
      <!--        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" cover></v-carousel-item>-->
      <!--      </v-carousel>-->

      <v-row>
        <v-col cols="12" md="8">
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
        </v-col>
        <v-col cols="12" md="4" fill-height>
          <v-sheet class="pa-4" rounded>
            <div class="font-weight-bold">会议室日程</div>

            <v-timeline align="start" density="compact">
              <v-timeline-item v-for="item in items2" :key="item.id" :dot-color="item.color" size="small">
                <v-alert :color="item.color" :icon="item.icon">
                  {{ item.title }}
                </v-alert>
              </v-timeline-item>
            </v-timeline>
          </v-sheet>
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<style scoped>

</style>