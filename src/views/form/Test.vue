<script setup>
import { ref } from 'vue'

const meetingForm = ref({
  title: '',
  description: '',
  date: '',
  startTime: '',
  endTime: '',
  location: '',
  attendees: [],
})

const locations = [
  '会议室A',
  '会议室B',
  '会议室C',
  '线上会议',
]

const users = [
  { name: '张三', department: '技术部', avatar: 'Z' },
  { name: '李四', department: '市场部', avatar: 'L' },
  { name: '王五', department: '产品部', avatar: 'W' },
  { name: '赵六', department: '设计部', avatar: 'Z' },
]

const submitForm = () => {
  // 这里处理表单提交逻辑
  console.log('提交的会议信息：', meetingForm.value)
}
</script>

<template>
  <v-container>
    <v-card class="mx-auto mt-5" max-width="800">
      <v-card-title class="text-h5 font-weight-bold pa-4">
        预约会议
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="submitForm">
          <v-row>
            <!-- 会议标题 -->
            <v-col cols="12">
              <v-text-field
                  v-model="meetingForm.title"
                  label="会议主题"
                  required
                  variant="outlined"
                  prepend-inner-icon="mdi-format-title"
              ></v-text-field>
            </v-col>

            <!-- 会议描述 -->
            <v-col cols="12">
              <v-textarea
                  v-model="meetingForm.description"
                  label="会议描述"
                  variant="outlined"
                  prepend-inner-icon="mdi-text"
                  rows="3"
              ></v-textarea>
            </v-col>

            <!-- 日期选择 -->
            <v-col cols="12" md="6">
              <v-date-picker
                  v-model="meetingForm.date"
                  label="选择日期"
                  variant="outlined"
              ></v-date-picker>
            </v-col>

            <!-- 时间选择 -->
            <v-col cols="12" md="6">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                      v-model="meetingForm.startTime"
                      label="开始时间"
                      type="time"
                      variant="outlined"
                      prepend-inner-icon="mdi-clock-start"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                      v-model="meetingForm.endTime"
                      label="结束时间"
                      type="time"
                      variant="outlined"
                      prepend-inner-icon="mdi-clock-end"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <!-- 会议地点 -->
            <v-col cols="12">
              <v-select
                  v-model="meetingForm.location"
                  :items="locations"
                  label="会议地点"
                  variant="outlined"
                  prepend-inner-icon="mdi-map-marker"
              ></v-select>
            </v-col>

            <!-- 参会人员 -->
            <v-col cols="12">
              <v-select
                  v-model="meetingForm.attendees"
                  :items="users"
                  label="选择参会人员"
                  multiple
                  chips
                  variant="outlined"
                  prepend-inner-icon="mdi-account-multiple"
                  item-title="name"
                  item-value="name"
              >
                <template v-slot:selection="{ item }">
                  <v-chip>
                    <v-avatar start>{{ item.raw.avatar }}</v-avatar>
                    {{ item.raw.name }} - {{ item.raw.department }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>
          </v-row>

          <!-- 提交按钮 -->
          <v-row class="mt-4">
            <v-col cols="12" class="d-flex justify-end">
              <v-btn
                  color="error"
                  class="me-4"
                  variant="outlined"
              >
                取消
              </v-btn>
              <v-btn
                  color="primary"
                  type="submit"
                  variant="elevated"
              >
                预约会议
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-card-title {
  border-bottom: 1px solid #e0e0e0;
}
</style>