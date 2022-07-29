<script setup lang="ts">
  import { onMounted, ref } from "@vue/runtime-core";
  const date = ref();
  onMounted(() => {
    const startDate = new Date();
    const endDate = new Date();
    date.value = [startDate, endDate];
  });
</script>
<template>
  <main>
    <!-- <DoughnutChart /> -->
    <LineChart />
  </main>
</template>
<style scoped lang="scss">
  main {
    background: #f2f4f5;
  }
</style>
