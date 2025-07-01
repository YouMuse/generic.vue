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
        <v-col cols="4">
          <v-row>
            <v-card prepend-icon="mdi-filter" title="筛选条件">
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-col cols="12">
                      <v-date-picker locale="zh-cn" color="primary" variant="outlined"></v-date-picker>
                    </v-col>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field label="开始时间" type="time" variant="outlined"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field label="结束时间" type="time" variant="outlined"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-select label="容纳人数" variant="outlined" prepend-inner-icon="mdi-map-marker"></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-select label="会议地点" variant="outlined" prepend-inner-icon="mdi-map-marker"></v-select>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-btn class="text-none" color="primary" prepend-icon="mdi-magnify" rounded="lg" text="查找会议室" variant="flat" block/>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-col>

        <v-col>
          <v-card title="可用会议室">
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-card color="#385F73">
                    <v-card-title class="text-h5">
                      Unlimited music now
                    </v-card-title>

                    <v-card-subtitle>
                      Listen to your favorite artists and albums whenever and wherever, online and offline.
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-btn text="Listen Now" variant="text"></v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>

                <v-col cols="12">
                  <v-card color="#1F7087">
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title class="text-h5">
                          Supermodel
                        </v-card-title>

                        <v-card-subtitle>Foster the People</v-card-subtitle>

                        <v-card-actions>
                          <v-btn
                              class="ms-2"
                              size="small"
                              text="START RADIO"
                              variant="outlined"
                          ></v-btn>
                        </v-card-actions>
                      </div>

                      <v-avatar
                          class="ma-3"
                          rounded="0"
                          size="125"
                      >
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12">
                  <v-card color="#952175">
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title class="text-h5">
                          Halcyon Days
                        </v-card-title>

                        <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                        <v-card-actions>
                          <v-btn
                              class="ms-2"
                              icon="mdi-play"
                              variant="text"
                          ></v-btn>
                        </v-card-actions>
                      </div>

                      <v-avatar
                          class="ma-3"
                          rounded="0"
                          size="125"
                      >
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions class="justify-center">
              <v-btn class="text-none" color="primary" append-icon="mdi-refresh" rounded="lg" text="加载更多" variant="outlined"/>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>