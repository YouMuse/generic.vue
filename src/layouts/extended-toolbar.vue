<script setup>

</script>

<template>
  <v-app id="inspire">
    <v-app-bar extended>
      <v-app-bar-title>Application</v-app-bar-title>

      <v-btn icon="mdi-dots-vertical">
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
              v-for="n in 24"
              :key="n"
              cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>