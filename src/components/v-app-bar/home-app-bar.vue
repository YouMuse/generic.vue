<script setup lang="ts">
import {ref} from 'vue'
import {useDisplay} from 'vuetify'

const {smAndUp} = useDisplay()

const links = [
  {id: 0, text: '首页', icon: 'mdi-home-circle', link: '/'},
  {id: 1, text: '我的预约', icon: 'mdi-invoice-clock', link: '/user'}
]

const drawer = ref(false)
</script>

<template>
  <v-app-bar v-bind:elevation="1" flat>
    <v-app-bar-nav-icon v-if="!smAndUp" variant="text" v-on:click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-container fluid v-if="smAndUp" class="mx-auto d-flex justify-center align-center">
      <v-avatar class="me-4" size="32">
        <v-img alt="logo" src="src/assets/logo.svg"></v-img>
      </v-avatar>

      <v-btn v-for="link in links" :key="link.id" :text="link.text" :to="link.link" variant="text"></v-btn>

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

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item v-for="link in links" :key="link.id" :text="link.text" :to="link.link"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>