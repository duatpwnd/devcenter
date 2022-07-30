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
    <TimeSeriesChart />
  </main>
</template>
<style scoped lang="scss">
  main {
    background: rgb(22, 26, 30);
  }
</style>
