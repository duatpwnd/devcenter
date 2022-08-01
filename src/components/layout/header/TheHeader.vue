<script setup lang="ts">
  import { onMounted } from "@vue/runtime-core";
  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <header>
    <img src="@/assets/images/logo.svg" class="logo" alt="logo" title="logo" />
    <router-link to="/dashboard" class="dashboard-link">대시보드</router-link>
  </header>
</template>
<style scoped lang="scss">
  header {
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 21;
    height: 80px;
    background-color: #1a1b1e;
    .dashboard-link {
      vertical-align: -3px;
      color: #b8bfc4;
    }
  }
</style>
