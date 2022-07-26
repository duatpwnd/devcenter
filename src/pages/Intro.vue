<script setup lang="ts">
  import { onMounted } from "@vue/runtime-core";
  onMounted(() => {
    console.log("intro onmounted");
  });
</script>
<template>
  <main>
    <img src="@/assets/images/intro.png" />
  </main>
</template>
<style scoped lang="scss">
  main {
    text-align: center;
  }
</style>
