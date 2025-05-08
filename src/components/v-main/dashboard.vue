<script setup>
const statCards = [
  {
    id: '0000000001',
    target: '总申请',
    description: '所有申请数据',
    amount: '1024'
  },
  {
    id: '0000000001',
    target: '月申请',
    description: '当月申请数据',
    amount: '256'
  },
  {
    id: '0000000001',
    target: '日申请',
    description: '当日申请数据',
    amount: '128'
  },
  {
    id: '0000000001',
    target: '性能',
    description: '系统性能信息',
    amount: '60%'
  }
]
</script>

<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <v-row>
        <v-col cols="12" sm="3" v-for="(item, i) in statCards" :key="i" :value="item">
          <v-alert border="start" close-label="Close Alert" color="orange-accent-4" v-bind:title="item.target" variant="tonal">
            {{ item.description }}
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>