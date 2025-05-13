<template>
  <v-img class="fill-height" src="https://cdn.pixabay.com/photo/2022/10/07/12/48/sea-7504986_1280.jpg" aspect-ratio="16/9" cover>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card elevation="12">
            <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>
            <v-card-item>
              <v-card-title class="text-center">
                <h2 class="text-h4 black--text font-weight-bold">
                  Sign in to our platform
                </h2>
              </v-card-title>
            </v-card-item>
            <v-card-text>
              <v-row justify="center">
                <v-col cols="12" md="10">
                  <v-text-field solo flat outlined prepend-inner-icon="mdi-account-outline" hide-details label="Enter email"></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="10">
                  <v-text-field solo flat outlined prepend-inner-icon="mdi-lock-open" hide-details class="mt-6" label="Password"></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="10" class="text-right">
                  Lost password?
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="10">
                  <v-btn block class="text-capitalize" large color="primary">sign in</v-btn>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="10" class="text-center">
                  Not registered?
                  <span class="primary--text text-subtitle-1">Create account</span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>
<script setup lang="ts">
</script>