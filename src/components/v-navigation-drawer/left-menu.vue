<script setup>
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

const menuInfo = [
  {text: '仪表板', icon: 'mdi-home', link: '/'},
  {text: 'Shared with me', icon: 'mdi-account-multiple', link: '/list'},
  {text: 'Starred', icon: 'mdi-star', link: '/1'},
  {text: 'Recent', icon: 'mdi-history', link: '/2'},
  {text: 'Offline', icon: 'mdi-check-circle', link: '/3'},
  {text: 'Uploads', icon: 'mdi-upload', link: '/4'},
  {text: 'Backups', icon: 'mdi-cloud-upload', link: '/5'},
]
</script>

<template>
  <v-navigation-drawer>
    <v-card variant="text" v-bind:title="systemInfo.name" v-bind:subtitle="systemInfo.version"></v-card>

    <v-list>
      <v-list-item v-bind:prepend-avatar="userInfo.avatar" v-bind:subtitle="userInfo.email" v-bind:title="userInfo.name"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="(item, i) in menuInfo" :key="i" :value="item" v-bind:prepend-icon="item.icon" v-bind:title="item.text" :to="item.link" color="primary"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>