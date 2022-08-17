<script setup lang="ts">
  import { onMounted, ref } from "@vue/runtime-core";
  import { useMq } from "vue3-mq";
  const date = ref();
  const mq = useMq();
  onMounted(() => {
    const startDate = new Date();
    const endDate = new Date();
    date.value = [startDate, endDate];
  });
  const regionList = {
    서울: 2,
    경기도: 1,
    인천: 5,
    강원도: 16545,
    충청북도: 12,
    충청남도: 15,
    세종: 19,
    대전: 25,
    경상북도: 1555,
    대구: 239,
    울산: 56,
    경상남도: 20,
    부산: 4,
    제주도: 12,
    광주: 9,
    전라남도: 12,
    전라북도: 1555,
  };
  const chartData = {
    title: "직군별 / 랩코드 스캔 비율",
    labels: [
      "마케팅",
      "디자인",
      "개발",
      "영업",
      "HR",
      "식음료",
      "교육",
      "제조•생산",
    ],
    datasets: [
      {
        borderColor: "#2F3137",
        backgroundColor: "#2F3137",
        hoverBackgroundColor: "#0E63FE",
        borderRadius: 10,
        borderSkipped: false,
        barPercentage: 0.8,
        categoryPercentage: 0.8,
        data: [40, 20, 30, 40, 10, 15, 45, 25],
      },
    ],
  };
  const chartData1 = {
    title: "연령대 / 랩코드 스캔 비율",
    labels: ["10대", "20대", "30대", "40대", "50대", "60대"],
    datasets: [
      {
        borderColor: "#2F3137",
        backgroundColor: "#2F3137",
        hoverBackgroundColor: "#0E63FE",
        borderRadius: 10,
        borderSkipped: false,
        barPercentage: 0.8,
        categoryPercentage: 0.8,

        data: [40, 20, 30, 40, 10, 15, 45, 25],
      },
    ],
  };
</script>
<template>
  <main>
    <!-- <D3Map /> -->
    <!-- <TimeSeriesChart /> -->
    <!-- <div class="korea-map-wrapper">
      <KoreaMap :data="regionList" />
    </div> -->
    <BarChart :chartData="chartData1" />
    <BarChart :chartData="chartData" />
  </main>
</template>
<style scoped lang="scss">
  main {
    .korea-map-wrapper {
      max-width: 640px;
      margin: 0 auto;
    }
    .wrap {
      margin-top: 40px;
    }
  }
</style>
