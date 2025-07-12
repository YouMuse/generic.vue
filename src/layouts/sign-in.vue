<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {login} from '@/services/authorizationService'

const record = ref({
  username: '',
  password: ''
})

const router = useRouter()

function onSubmit() {
  login(record.value).then(response => {
    localStorage.setItem('token', response.data.ticket)

    router.push('/room')
  }).catch(error => {
    console.error('登录失败:', error);
  })
}
</script>

<template>
  <v-img class="fill-height" src="/src/assets/sea.jpg" aspect-ratio="16/9" cover>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card elevation="12">
            <v-form v-on:submit.prevent="onSubmit">
              <v-img height="300px" src="/src/assets/sunshine.jpg" cover></v-img>
              <v-card-item>
                <v-card-title class="text-center">
                  <h2 class="text-h4 black--text font-weight-bold">
                    登录后台
                  </h2>
                </v-card-title>
              </v-card-item>
              <v-card-text>
                <v-row justify="center">
                  <v-col cols="12" md="10">
                    <v-text-field v-model="record.username" solo flat outlined prepend-inner-icon="mdi-account-outline" hide-details label="请输入用户名"></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="10">
                    <v-text-field v-model="record.password" solo flat outlined type="password" prepend-inner-icon="mdi-lock-open" hide-details class="mt-6" label="请输入密码"></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="10">
                    <v-btn block class="text-capitalize" large color="primary" type="submit">登录</v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>