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
    <span :style="{ color: 'red' }">나의질문</span>
  </main>
</template>
<style scoped lang="scss"></style>
