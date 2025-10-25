<script setup>
import {ref} from 'vue'

const tab = ref(null)

const items = [
  {id: 0, text: '全部预约'},
  {id: 1, text: '待审核'},
  {id: 2, text: '已驳回'},
  {id: 3, text: '已通过'},
  {id: 4, text: '已完成'},
]

</script>

<template>
  <v-main>
    <v-container fluid>
      <v-card title="我的预约" subtitle="查看和管理您的会议室预约记录" variant="elevated" hover>
        <v-divider></v-divider>

        <v-tabs v-model="tab">
          <v-tab v-for="item in items" :key="item.id" :value="item.id">{{ item.text }}</v-tab>
        </v-tabs>

        <v-divider></v-divider>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item v-for="item in items" :key="item.id" :value="item.id">
            <v-container fluid>
              <v-row>
                <v-col cols="12" md="6" v-for="item in 17">
                  <v-card min-height="200px">
                    <v-card-item>
                      <v-card-title>项目启动会议</v-card-title>
                      <v-card-subtitle class="text-right">2023-09-01 10:00</v-card-subtitle>
                    </v-card-item>

                    <v-card-text>

                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="blue" variant="elevated" class="ms-2" text="评价"></v-btn>
                      <v-btn color="red" variant="elevated" class="ms-2" text="取消预约"></v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>