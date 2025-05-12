<script setup>
import leftMenu from '@/components/v-navigation-drawer/left-menu.vue'
import searchAppBar from '@/components/v-app-bar/search-app-bar.vue'
import oneLine from '@/components/v-footer/one-line.vue'
</script>

<template>
  <v-app>
    <leftMenu/>

    <searchAppBar/>

    <router-view/>

    <oneLine/>
  </v-app>
</template>

<style scoped>

</style>