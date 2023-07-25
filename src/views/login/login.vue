<template>
  <div class="login">
    <div class="loginCheck">
      <h1>弘源后台管理系统</h1>
      <div>
        登录
      </div>
      <div>
        记住密码 忘记密码
      </div>
      <button>立即登录</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
