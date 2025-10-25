<script setup>
import {useRouter} from 'vue-router'

const systemInfo = {
  name: '会议室预约管理系统',
  version: '1.0(alpha)'
}

const userInfo = {
  id: '0000000001',
  name: 'Sandra Adams',
  sex: '1',
  phone: '+8610000',
  email: 'sandra_a88@gmailcom',
  avatar: 'https://randomuser.me/api/portraits/women/85.jpg'
}

const links = [
  {id: 3, text: '会议室管理', icon: 'mdi-home-circle', link: '/room'},
  {id: 5, text: '排班管理', icon: 'mdi-invoice-clock', link: '/scheduling'},
  {id: 5, text: '预约管理', icon: 'mdi-check-circle', link: '/reserve'},
]

const router = useRouter()

function signOut() {
  localStorage.removeItem('token')

  router.push('/login')
}
</script>

<template>
  <v-navigation-drawer permanent>
    <v-card variant="text" v-bind:title="systemInfo.name" v-bind:subtitle="systemInfo.version"></v-card>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="item in links" :key="item.id" :value="item" v-bind:prepend-icon="item.icon" v-bind:title="item.text" :to="item.link" color="primary"></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block v-on:click="signOut">退出</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>