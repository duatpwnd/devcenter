<script setup lang="ts">
  import { onMounted } from "@vue/runtime-core";
  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <header>
    <span class="title-logo">Snaptag Developers</span>
  </header>
</template>
<style scoped lang="scss">
  header {
    padding: 25px 32px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 21;
    width: 100%;
    min-width: 964px;
    height: 74px;
    background-color: #1a1b1e;
    .title-logo {
      font-family: "Poppins";
      font-size: 18px;
      color: white;
    }
  }
</style>
