<script setup lang="ts">
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'
</script>

<template>
  <div>我是APP啊0619</div>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">111</el-button>
    <el-button type="success">22</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <router-view></router-view>
</template>

<style scoped></style>
