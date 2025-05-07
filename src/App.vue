<template>
  <v-app>
    <router-view v-slot="{ Component }">
      <v-fade-transition appear>
        <component :is="Component"/>
      </v-fade-transition>
    </router-view>
  </v-app>
</template>