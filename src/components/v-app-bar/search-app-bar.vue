<script setup>

</script>

<template>
  <v-app-bar>
    <v-container fluid class="mx-auto align-center d-flex">
      <v-responsive max-width="260">
        <v-text-field append-inner-icon="mdi-magnify" density="compact" label="Search" variant="outlined" hide-details single-line></v-text-field>
      </v-responsive>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-avatar color="brown">
          <span class="text-h5">CJ</span>
        </v-avatar>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped>

</style>