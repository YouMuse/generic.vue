<script setup>
import HomeAppBar from '@/components/v-app-bar/home-app-bar.vue'
</script>

<template>
  <v-app id="inspire">
    <HomeAppBar/>

    <router-view/>
  </v-app>
</template>

<style scoped>

</style>