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
        <v-col cols="4" sm="4" xl="2">
          <v-container>
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
          </v-container>
        </v-col>

        <v-col cols="8" sm="8" xl="10">
          <v-card title="可用会议室">
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-card hover>
                    <div class="d-flex justify-start">
                      <v-avatar class="ma-3" rounded="0" size="250">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                      </v-avatar>

                      <v-card variant="text">
                        <v-card-item>
                          <v-card-title>
                            A101会议室
                          </v-card-title>

                          <v-card-subtitle>
                            <div class="d-flex justify-start ga-2 mt-2">
                              <v-chip color="teal" prepend-icon="mdi-account-group">
                                15人
                              </v-chip>
                              <v-chip color="teal" prepend-icon="mdi-map-marker">
                                总部大楼15层
                              </v-chip>
                              <v-chip color="teal" prepend-icon="mdi-clock-time-seven-outline">
                                09:00-18:00
                              </v-chip>
                            </div>
                          </v-card-subtitle>
                        </v-card-item>

                        <v-card-text>

                          <p class="text-medium-emphasis">宽敞明亮的会议室，配备高清投影仪、智能白板和视频会议系统，适合团队会议和客户演示。</p>

                          <div class="d-flex justify-start ga-2 mt-4">
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              投影仪
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              高速WiFi
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              白板
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              视频会议
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              音响系统
                            </v-chip>
                          </div>

                        </v-card-text>

                        <v-card-actions>
                          <v-btn class="text-none" color="primary" rounded="lg" text="立即预约" variant="flat"/>
                        </v-card-actions>
                      </v-card>

                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12">
                  <v-card hover>
                    <div class="d-flex justify-start">
                      <v-avatar class="ma-3" rounded="0" size="250">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                      </v-avatar>

                      <v-card variant="text">
                        <v-card-item>
                          <v-card-title>
                            A102会议室
                          </v-card-title>

                          <v-card-subtitle>
                            <div class="d-flex justify-start ga-2 mt-2">
                              <v-chip color="teal" prepend-icon="mdi-account-group">
                                15人
                              </v-chip>
                              <v-chip color="teal" prepend-icon="mdi-map-marker">
                                总部大楼15层
                              </v-chip>
                              <v-chip color="teal" prepend-icon="mdi-clock-time-seven-outline">
                                09:00-18:00
                              </v-chip>
                            </div>
                          </v-card-subtitle>
                        </v-card-item>

                        <v-card-text>

                          <p class="text-medium-emphasis">宽敞明亮的会议室，配备高清投影仪、智能白板和视频会议系统，适合团队会议和客户演示。</p>

                          <div class="d-flex justify-start ga-2 mt-4">
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              投影仪
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              高速WiFi
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              白板
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              视频会议
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              音响系统
                            </v-chip>
                          </div>

                        </v-card-text>

                        <v-card-actions>
                          <v-btn class="text-none" color="primary" rounded="lg" text="立即预约" variant="flat"/>
                        </v-card-actions>
                      </v-card>

                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12">
                  <v-card hover>
                    <div class="d-flex justify-start">
                      <v-avatar class="ma-3" rounded="0" size="250">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                      </v-avatar>

                      <v-card variant="text">
                        <v-card-item>
                          <v-card-title>
                            A103会议室
                          </v-card-title>

                          <v-card-subtitle>
                            <div class="d-flex justify-start ga-2 mt-2">
                              <v-chip color="teal" prepend-icon="mdi-account-group">
                                15人
                              </v-chip>
                              <v-chip color="teal" prepend-icon="mdi-map-marker">
                                总部大楼15层
                              </v-chip>
                              <v-chip color="teal" prepend-icon="mdi-clock-time-seven-outline">
                                09:00-18:00
                              </v-chip>
                            </div>
                          </v-card-subtitle>
                        </v-card-item>

                        <v-card-text>

                          <p class="text-medium-emphasis">宽敞明亮的会议室，配备高清投影仪、智能白板和视频会议系统，适合团队会议和客户演示。</p>

                          <div class="d-flex justify-start ga-2 mt-4">
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              投影仪
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              高速WiFi
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              白板
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              视频会议
                            </v-chip>
                            <v-chip size="small" color="teal" prepend-icon="mdi-checkbox-marked-circle">
                              音响系统
                            </v-chip>
                          </div>

                        </v-card-text>

                        <v-card-actions>
                          <v-btn class="text-none" color="primary" rounded="lg" text="立即预约" variant="flat"/>
                        </v-card-actions>
                      </v-card>

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