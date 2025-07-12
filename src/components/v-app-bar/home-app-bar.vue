<script setup lang="ts">
const links = [
  '首页',
  '我的预约',
  '使用统计',
]
</script>

<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-avatar class="me-4" size="32">
        <v-img alt="logo" src="src/assets/logo.svg"></v-img>
      </v-avatar>

      <h3 class="text-subtitle-1 font-weight-bold">会议室预约系统</h3>

      <v-spacer></v-spacer>

<!--      <v-btn v-for="link in links" :key="link" :text="link" variant="text"></v-btn>-->
    </v-container>
  </v-app-bar>
</template>

<style scoped>

</style>