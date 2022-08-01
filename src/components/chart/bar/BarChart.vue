<script setup lang="ts">
  const chartOptions = {
    title: {
      text: "지역별 다운로드 횟 수",
      align: "center",
      style: {
        fontSize: "16px",
        color: "#f6f7f8",
      },
    },
    chart: {
      id: "vuechart-example",
    },
    colors: ["rgb(132, 142, 156)"],
    xaxis: {
      categories: ["서울", "경기도", "인천", "대전", "부산"],
      labels: {
        style: {
          colors: "rgb(132, 142, 156)",
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "rgb(132, 142, 156)",
          fontSize: "14px",
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
  };
  const series = [
    {
      name: "downloads",
      data: [1000, 2000, 4000, 6000, 8000],
    },
  ];
</script>
<template>
  <apexchart
    type="bar"
    :options="chartOptions"
    height="500px"
    :series="series"
  ></apexchart>
</template>
<style scoped lang="scss"></style>
