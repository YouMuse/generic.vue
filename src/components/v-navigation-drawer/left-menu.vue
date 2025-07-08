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

const menu = [
  {id: 2, text: '用户管理', icon: 'mdi-account-multiple', link: '/user'},
  {id: 3, text: '会议室管理', icon: 'mdi-home-circle', link: '/room'},
  {id: 4, text: '设施管理', icon: 'mdi-usb-flash-drive', link: '/facility'},
  {id: 5, text: '预约管理', icon: 'mdi-check-circle', link: '/reserve'},
  {id: 5, text: '排班管理', icon: 'mdi-invoice-clock', link: '/scheduling'},
  {id: 8, text: '基础数据维护', icon: 'mdi-cloud-upload', link: '/appointment'},
  {id: 6, text: '测试', icon: 'mdi-upload', link: '/test'},
  {id: 7, text: '会议室预约', icon: 'mdi-cloud-upload', link: '/appointment'},
]
</script>

<template>
  <v-navigation-drawer permanent>
    <v-card variant="text" v-bind:title="systemInfo.name" v-bind:subtitle="systemInfo.version"></v-card>

    <v-list>
      <v-list-item v-bind:prepend-avatar="userInfo.avatar" v-bind:subtitle="userInfo.email" v-bind:title="userInfo.name"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="item in menu" :key="item.id" :value="item" v-bind:prepend-icon="item.icon" v-bind:title="item.text" :to="item.link" color="primary"></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block to="/login"> 退出</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>

</style>