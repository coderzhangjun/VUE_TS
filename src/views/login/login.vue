<template>
  <div class="login">
    <div class="loginCheck">
      <h1>弘源后台管理系统</h1>
      <el-tabs type="border-card" stretch>
        <el-tab-pane label="账号登录">
          <div>账号</div>
          <div>密码</div>
        </el-tab-pane>
        <el-tab-pane label="手机登录">手机登录</el-tab-pane>
      </el-tabs>
      <div style="display: flex;justify-content: space-between;">
        <el-checkbox v-model="checked1" label="记住密码" size="large" />
        <el-link :underline="false" href="https://element-plus.org" target="_blank" type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" style="width: 100%;">立即登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

let checked1 = ref(false)
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/img/login-bg.svg');
  width: 100%;
  height: 100%;
}

/* .loginCheck {} */
</style>
