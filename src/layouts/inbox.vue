<script setup>
import LeftMenu from '@/components/v-navigation-drawer/left-menu.vue'
import SearchAppBar from '@/components/v-app-bar/search-app-bar.vue'
import OneLine from '@/components/v-footer/one-line.vue'
</script>

<template>
  <v-app>
    <LeftMenu/>

    <SearchAppBar/>

    <router-view/>

    <OneLine/>
  </v-app>
</template>

<style scoped>

</style>