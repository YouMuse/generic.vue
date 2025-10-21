<script setup lang="ts">
const links = [
  '首页',
  '我的预约',
  '使用统计',
]
</script>

<template>
  <v-app-bar v-bind:elevation="1" flat>
    <v-container fluid class="mx-auto d-flex justify-center align-center">
      <v-avatar class="me-4" size="32">
        <v-img alt="logo" src="src/assets/logo.svg"></v-img>
      </v-avatar>

      <v-btn v-for="link in links" :key="link" :text="link" variant="text"></v-btn>

      <v-spacer></v-spacer>

      <v-btn class="ms-1 opacity-60" icon="mdi-bell-outline"/>

      <v-btn class="ms-1" icon>
        <v-avatar image="https://cdn.vuetifyjs.com/images/john.png"/>
        <v-menu activator="parent" origin="top">
          <v-list>
            <v-list-item link title="Update profile"/>
            <v-list-item link title="Sign out"/>
          </v-list>
        </v-menu>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped>

</style>