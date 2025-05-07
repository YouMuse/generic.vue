<template>
  <v-navigation-drawer>
    <v-card variant="text" v-bind:title="systemInfo.name" v-bind:subtitle="systemInfo.version"></v-card>

    <v-list>
      <v-list-item v-bind:prepend-avatar="userInfo.avatar" v-bind:subtitle="userInfo.email" v-bind:title="userInfo.name"></v-list-item>
    </v-list>
    <router-link to="/index">TEST</router-link>
    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="(item, i) in items" :key="i" :value="item" v-bind:prepend-icon="item.icon" v-bind:title="item.text" color="primary"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar>
    <v-container fluid class="mx-auto align-center d-flex">
      <v-responsive max-width="260">
        <v-text-field append-inner-icon="mdi-magnify" density="compact" label="Search templates" variant="outlined" hide-details single-line></v-text-field>
      </v-responsive>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-avatar color="brown">
          <span class="text-h5">CJ</span>
        </v-avatar>
      </v-btn>
    </v-container>

  </v-app-bar>

  <v-main>
    <v-container class="py-8 px-6" fluid>
      <v-row>
        <v-col cols="12" sm="3" v-for="(item, i) in statCards" :key="i" :value="item">
          <v-alert border="start" close-label="Close Alert" color="orange-accent-4" v-bind:title="item.target" variant="tonal">
            {{ item.description }}
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-main>

  <v-footer app>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></v-footer>
</template>

<script setup>
import {ref, reactive} from 'vue'

const items = [
  {text: '仪表板', icon: 'mdi-home'},
  {text: 'Shared with me', icon: 'mdi-account-multiple'},
  {text: 'Starred', icon: 'mdi-star'},
  {text: 'Recent', icon: 'mdi-history'},
  {text: 'Offline', icon: 'mdi-check-circle'},
  {text: 'Uploads', icon: 'mdi-upload'},
  {text: 'Backups', icon: 'mdi-cloud-upload'},
]

const systemInfo = {
  name: '会议室预约管理系统',
  version: '1.0'
}

const userInfo = {
  id: '0000000001',
  name: 'Sandra Adams',
  sex: '1',
  phone: '+8610000',
  email: 'sandra_a88@gmailcom',
  avatar: 'https://randomuser.me/api/portraits/women/85.jpg'
}

const statCards = [
  {
    id: '0000000001',
    target: '总申请',
    description: '所有申请数据',
    amount: '1024'
  },
  {
    id: '0000000001',
    target: '月申请',
    description: '当月申请数据',
    amount: '256'
  },
  {
    id: '0000000001',
    target: '日申请',
    description: '当日申请数据',
    amount: '128'
  },
  {
    id: '0000000001',
    target: '性能',
    description: '系统性能信息',
    amount: '60%'
  }
]
</script>

<script>
export default {
  data: () => ({}),
}
</script>