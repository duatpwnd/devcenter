<script setup lang="ts">
  import { onMounted } from "@vue/runtime-core";
  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <header>
    <img src="@/assets/images/logo.svg" class="logo" />
  </header>
</template>
<style scoped lang="scss">
  header {
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 21;
    background-color: #1a1b1e;
  }
</style>
