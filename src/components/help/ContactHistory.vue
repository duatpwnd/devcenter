<script setup lang="ts">
  import { onMounted, ref, getCurrentInstance } from "@vue/runtime-core";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <main>
    <span :style="{ color: 'red' }">문의히스토리</span>
  </main>
</template>
<style scoped lang="scss"></style>
