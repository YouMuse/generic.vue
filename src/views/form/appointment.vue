<script setup lang="ts">

</script>

<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card title="会议室预约" text="轻松预订您需要的会议室，高效安排会议" variant="text"></v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-sheet rounded="lg" class="pa-4">
            <v-row>
              <v-col cols="12" class="">
                <h3 class="d-flex font-weight-bold">
                  筛选条件
                </h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field :counter="10" label="日期" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-date-picker color="primary" variant="outlined"></v-date-picker>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">4</v-col>
            </v-row>
            <v-row>
              <v-col cols="12">5</v-col>
            </v-row>
            <v-row>
              <v-col cols="12">6</v-col>
            </v-row>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <!--  -->
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>